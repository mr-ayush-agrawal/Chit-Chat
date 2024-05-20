import SingleChat from "./SingleChat";
import useGetConversation from "../../zustand/useConversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {

    const {loaidng, conversation } = useGetConversation();
    console.log("Convos  ", conversation)

    return (
        <div className="py-2 flex flex-col overflow-auto ">
            {conversation.map((conversation)=>{
                <SingleChat 
                    key={conversation._id}
                    conversation={conversation}
                    emoji = {getRandomEmoji()}
                    lastIdx = {idx === conversation.length - 1 }
                />
            })}
            {loaidng ?  <span className="loading loading-spinner mx-auto"></span>: null}
        </div>
    );
}

export default Conversations;