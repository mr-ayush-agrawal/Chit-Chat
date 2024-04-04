const login = async (req, res) =>{
    console.log("Login")
}

const logout = async (req, res) =>{
    console.log("Logout")
    
}

const signup = async (req, res) =>{
    try{
        const {fullname, username, password, cnfpassword, gender} = req.body
    }
    catch {

    }
}

export {
    login,
    signup,
    logout
}