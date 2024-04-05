import bcrypt from 'bcrypt'
import User from '../models/user.model.js'

const login = async (req, res) =>{
    console.log("Login")
}

const logout = async (req, res) =>{
    console.log("Logout")
    
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