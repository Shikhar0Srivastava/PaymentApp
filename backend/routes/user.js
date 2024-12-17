const express = require("express");
const cors = require("cors");
const zod = require("zod");
const { User, Account } = require("../db.js");
const jwt = require("jsonwebtoken");
const secret = require("../config.js");
const authMiddleware = require("../middleware.js");

const app = express();
app.use(cors());

const router = express.Router();

const userDataSchema = zod.object({
    username: zod.string({
        required_error: "Username required"
    }).email({
        message: "Enter valid email"
    }).trim(),
    password: zod.string({
        required_error: "Password required"
    }).min(8, {
        message: "Password should be 8 letters or more"
    }),
    firstName: zod.string({
        required_error: "First name is required"
    }).trim(),
    lastName: zod.string({
        required_error: "Last name is required"
    }).trim()
});

const updateBodySchema = zod.object({
    password: zod.string().min(8, {
        message: "Password should be 8 letters of more"
    }).optional(),
    firstName: zod.string().trim().optional(),
    lastName: zod.string().trim().optional()
});

router.post("/signup", async (req, res) => {
    const userData = req.body;
    const valid = userDataSchema.safeParse(userData);
    if (valid) {
        try {
            const username = valid.data.username;
            const exists = await User.findOne({username});
            if (!exists) {
                const dbUser = await User.create(userData);
                const token = jwt.sign({
                    userId: dbUser._id
                }, secret.JWT_SECRET);

                await Account.create({
                    userId: dbUser._id,
                    balance: 1 + Math.random()*10000
                })
                return res.status(200).json({
                    message: "User created successfully",
                    token: token
                })
            }
        } catch (error) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }
    }
    return res.status(411).json({
        message: "Email already taken / Incorrect inputs"
    }); 
});

router.post("/signin", async (req, res) => {
    try {
        const email = req.body.username;
        const pass = req.body.password;

        const userExist = await User.findOne({
            username: email,
            password: pass
        });

        if (userExist) {
            const userId = userExist._id.toString();
            const token = jwt.sign({userId}, secret.JWT_SECRET);
            return res.status(200).json({
                token
            });
        }

        return res.status(411).json({
            message: "Error while logging in"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error while logging in"
        });
    }
});

router.put("/", authMiddleware, async (req, res) => {
    const userId = req.userId;
    try {
        const validDetails = updateBodySchema.safeParse(req.body);
        if(!validDetails) {
            return res.status(411).json({
                message: "Error while updating info"
            })
        }
        await User.findById(userId).updateOne(req.body);
        return res.status(200).json({
            message: "Updated successfully"
        });
    } catch (err) {
        console.error(err)
        return res.status(411).json({
            message: "Error while updating information"
        })
    }
});

router.get("/bulk", authMiddleware, async (req, res) => {
    let nameToSearch = req.query.filter
    if (!nameToSearch) {
        nameToSearch = ""
    }
    nameToSearch = nameToSearch.toLowerCase();

    const users = await User.find({
        $and: [{
            $or: [
                {firstName: {
                    '$regex': nameToSearch,
                    '$options': "i"
                }},
                {lastName: {
                    '$regex': nameToSearch,
                    '$options': "i"
                }}
            ]
        }, {
            _id: {
                $ne: req.userId
            }
        }]
    });

    return res.send({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

router.get("/me", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        const me = await User.findById(userId);
        const fName = me.firstName;
        const lName = me.lastName;
        const email = me.username;
        return res.send({
            fName,
            lName,
            email,
        })
    } catch (error) {
        console.error(error);
        return res.status(404).json({
            message: "db down"
        })
    }
})

module.exports = router;