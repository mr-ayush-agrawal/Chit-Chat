import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/auth.context";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setauthuser} = useAuthContext()    
    
    const signup = async (Input) => {
        const {fullname, username, password, cnfpassword, gender} = Input
        const success = handleInputErrors( fullname, username, password, cnfpassword, gender)
        if(!success)
            return;

        setLoading(true);
        try {
            const res = await fetch("/auth/signup", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({ fullname, username, password, cnfpassword, gender})
            })

            const data = await res.json();
            if(data.error)
                throw new Error(data.error)
            console.log(data)

            // Local storage 
            localStorage.setItem("chat-user", JSON.stringify(data))
            
            // Context
            setauthuser(data)
        } 
        catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
    }

    return {loading, signup}
}

export default useSignup

function handleInputErrors( fullname, username, password, cnfpassword, gender){
    if(!fullname || !username || !password || !cnfpassword || !gender ){
        toast.error("Please fill in all the feild")
        return false
    }

    if (password !== cnfpassword){
        toast.error("Passwords do not Match")
        return false
    }

    // if(password.lenght < 6){
    //     toast.error("Password must be 6 character long");
    //     return false
    // }

    return true;
}