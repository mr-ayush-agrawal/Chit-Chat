import { useState } from "react"
import { useAuthContext } from "../context/auth.context";

const uselogin = () => {
    const [loading, setloading] = useState(false);
    const {setauthuser} = useAuthContext();

    const login  = async (username, password) => {
        const success = handleInputErrors( username, password)
        if(!success)
            return;
        
        setloading(true);
        try {
            const res = await fetch('/auth/login', {
                method : "POST", 
                headers: { "Content-Type" : "application/json" },
                body : JSON.stringify({username, password})
            })

            const data = await res.json()
            if(data.error)
                throw new Error(data.error)

            localStorage.setItem("chat-user", JSON.stringify(data))
            setauthuser(data)
        } 
        catch (error) {
            toast.error(error.message)
        }
        finally {
            setloading(false);
        }
    }

    return {loading, login};
}

export default uselogin

function handleInputErrors( username, password){
    if(!username || !password){
        toast.error("Please fill in all the feild")
        return false
    }
    return true;
}
