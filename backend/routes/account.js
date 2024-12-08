const express = require("express");
const { Account } = require("../db");
const authMiddleware = require("../middleware");
const { default: mongoose } = require("mongoose");

const app = express();

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const user = req.userId;
    try {
        const account = await Account.findOne({
            userId: user.userId
        });
        return res.status(200).json({
            balance: account.balance
        });
    } catch {
        return res.status(400).json({
            message: "Account not found"
        })
    }
});

router.post("/transfer", authMiddleware, async (req, res) => {
    try{
        const session = await mongoose.startSession();

        session.startTransaction();
        const {amount, to} = req.body;
        const userId = req.userId.userId;
        const from = await Account.findOne({userId: userId}).session(session);
        
        if (!from || from.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        const toAccount = Account.findOne({
            userId: to
        }).session(session);

        if (!toAccount) {
            session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        await Account.updateOne({userId}, {
            $inc: {
                balance: -amount
            }
        }).session(session);
        await Account.updateOne({to}, {
            $inc: {
                balance: amount
            }
        }).session(session);

        await session.commitTransaction();
        return res.status(200).json({
            message: "Transfer successfully"
        });
    } catch {
        return res.status(400).json({
            message: "Some error occurred"
        })
    }
})

module.exports = router;