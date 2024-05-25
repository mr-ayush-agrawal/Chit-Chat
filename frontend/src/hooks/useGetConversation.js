import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetConversation = () =>{
    const [loading, setloading] = useState(false);
    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        const getConversation = async () => {
            setloading(true);
            try{
                console.log("Getign users")
                const res = await fetch ('/users')
                console.log(res)
                const data = await res.json()
                if(data.error)
                    throw new Error(data.error)
                setConversation(data)
            }
            catch(error) {
                toast.error(error.message)
            }
            finally {
                setloading(false)
            }
        }
        getConversation();
    }, []);
    return {loading, conversation}
}

export default useGetConversation