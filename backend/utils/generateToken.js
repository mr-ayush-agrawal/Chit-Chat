import jwt from 'jsonwebtoken'

const genTokenAndCookie = (userId, res) => {
    const token =jwt.sign(
        {userId}, 
        process.env.JWT_SECRET,{
        expiresIn : '10d'
    })

    res.cookie("AccessToken", token, {
        maxAge: 15*24*60*60*1000,   // 15 days in ms
        httpOnly : true,    // prevent XSS Attack
        sameSite : "strict"
    })
}

export default genTokenAndCookie;