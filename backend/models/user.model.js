import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    }
});

const User = mongoose.model("User", userSchema);
export default User