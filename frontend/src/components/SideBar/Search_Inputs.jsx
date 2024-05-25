import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation"
import toast from "react-hot-toast";

const SearchInp = () => {
    const [search, setSearch] = useState("");
    const {setSelectedConversation} = useConversation()
    const {conversations} = useGetConversation()
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!search)
            return;
        if(search.length < 3)
            return toast.error('Search term must be atleast 3 charactrs long')

        const conversation = conversations.find((c)=>c.fullname.toLowerCase().includes(search.toLowerCase()));
        if(conversation){
            setSelectedConversation(conversation)
            setSearch("");
        }
        else {
            toast.error("No such user found")
        }
    }

    return (
        <form className="flex items-center gap-2 " onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="input input-bordered rounded-full" 
                placeholder="Search ..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-circle bg-sky-500 text-white"
            >
                <FaSearch />
            </button>
        </form>
    );
};

export default SearchInp;