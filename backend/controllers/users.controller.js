import User from "../models/user.model.js";

const getAllUsers = async (req, res) => {
    try {
        const currUserId = req.user._id;
        const allUsers = await User.find({
            // Skip this section If you want to message yourself
            _id : {
                $ne : currUserId
            }
        }).select("-password");

        res.status(200).json(allUsers)

    } catch (error) {
        console.error("Error in getAllUseres controller function", error.message)
        res.status(500).json({Error : "Internal Server Error"})
    }
}

export {
    getAllUsers,
}