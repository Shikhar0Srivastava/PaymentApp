const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb+srv://ithinkitsright0152:mo0CtNx2eKLkS86f@paytmcluster.jrvte.mongodb.net/Paytm");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowecase: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
});

const accountSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
    User,
    Account
}