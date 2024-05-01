import { useState } from "react"
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    
    const signup = async ( fullname, username, password, cnfpassword, gender) => {
        const success = handleInputErrors( fullname, username, password, cnfpassword, gender)
        if(!success)
            return;

        setLoading(true);
        try {
            console.log("INput", fullname, username, password, cnfpassword, gender)
            const res = await fetch("/auth/signup", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({ fullname, username, password, cnfpassword, gender})
            })

            const data = await res.json();
            console.log(data)
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

    if(password.lenght < 6){
        toast.error("Password must be 6 character long");
        return false
    }

    return true;
}