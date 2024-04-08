import bcrypt from 'bcrypt'
import User from '../models/user.model.js'
import genTokenAndCookie from '../utils/generateToken.js'

const login = async (req, res) =>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const correctPassword = await bcrypt.compare(password, user?.password || "");

        
        if(!user || !correctPassword)
            return res.status(400).json({err : "Invalid User or password"});
    
        genTokenAndCookie(user._id, res);
        res.status(200).json({
            _id : user._id, 
            username : user.username,
            fullname : user.fullname
        })
        
    } catch (error) {
        console.log("Error in Login controller")
        res.status(500).json({error : error})
    }
}

const logout = async (req, res) =>{
    try {
        res.cookie('jwt', '', {
            maxAge : 0
        })
        res.status(200).json({
            message: "Logged Out Successful"
        })
    } catch (error) {
        console.log("Error in Login controller")
        res.status(500).json({error : error})
    }    
}

const signup = async (req, res) =>{
    try{

        const {fullname, username, password, cnfpassword, gender} = req.body;

        if (password !== cnfpassword){
            res.status(400).json({error : "Password do not match"});
        }
        
        const preExistedUser = await User.findOne({username})
        if(preExistedUser){
            return res.status(400).json({error: "User Already Existed"})
        }
        
        const profilePic = `https://avatar.iran.liara.run/public/${gender === 'Male' ? "boy" : "girl"}?username=${username}`
        

        // Hasihing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        
        
        const newUser = await User.create({
            fullname,
            username,
            password : hashedPassword,
            gender,
            profilePic
        });


        genTokenAndCookie(newUser._id, res);
        await newUser.save();

        // We can skip this for as requiring a lot of db calls
        const createdUser = await User.findById(newUser._id).select(
            "-password"
        )
        
        res.status(201).json({
            createdUser
        })
    }
    catch(err) {
        console.log("Errror in signup controller")
        res.status(500).json({err})
    }
}

export {
    login,
    signup,
    logout
}