import jwt from 'jsonwebtoken';
import User from '../models/user.model,js';


const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.AccessToken;
        if(!token){
            return res.status(401).json({"error" : "Unauthorised Access - No Token Provided"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        if(!decoded){
            return res.status(401).json({"error" : "Unauthorised Access - Invalid Token"})
        }

        const user = await User.findById(decoded.userId).select("-password")

        if(!user){
            return res.status(404).json({"Error" : "User Not found"});
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("Error in the Protect Route middleware")
        res.status(500).json("Internal Server Error")
    }
}

export default protectRoute;