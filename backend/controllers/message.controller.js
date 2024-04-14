import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"

const sendMessage = async(req, res) => {
    try {
        const message = req.body;
        const {id : reciverId} = req.params;
        const senderId = req.user._id

        let convo = await Conversation.findOne({
            participants : {
                $all : [senderId, reciverId]
            }
        })        

        if(!convo){
            console.log("Creating New Conversation");
            convo = await Conversation.create({
                participants : [senderId, reciverId],
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message
        })

        if(newMessage){
            convo.messages.push(newMessage._id);
        }
    
        res.status(201).json(newMessage)
    } 
    catch (error) {
        console.log("Error in send Message Controller", error.message)
        res.status(500).json({ error })
    }
}

export {
    sendMessage
}