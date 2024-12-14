const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./account");
const authMiddleware = require("../middleware");
const app = express();

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

router.get("/validate", authMiddleware, (req, res) => {
    return res.send("reached here");
})

module.exports = router;