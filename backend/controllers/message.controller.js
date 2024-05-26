import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"
import { getReciverSocketId } from "../socket/socket.js";
import io from 'socket.io'

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: reciverId } = req.params;
        const senderId = req.user._id;

        let convo = await Conversation.findOne({
            participants: {
                $all: [senderId, reciverId]
            }
        })

        if (!convo) {
            console.log("Creating New Conversation");
            convo = await Conversation.create({
                participants: [senderId, reciverId],
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message
        })

        if (newMessage) {
            convo.messages.push(newMessage._id);
        }

        // await convo.save();
        // await newMessage.save();

        // Ṭhis will run both tasks parallel
        Promise.all([convo.save(), newMessage.save()]);

        // Socket.io functionality
        const reciverSocketId = getReciverSocketId(reciverId)
        if(reciverSocketId){
            io.to(reciverSocketId).emit("newMessage", newMessage)
            // io.to().emit() is used to send event to specific client
        }

        res.status(201).json(newMessage)
    }
    catch (error) {
        console.log("Error in send Message Controller : ", error.message)
        res.status(500).json({ error })
    }
}

const getMessage = async (req, res) => {
    try {
        const { id: userToChat } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChat] }
        }).populate("messages") // Not message but actual messgae

        if (!conversation){
            return res.status(200).json([])
        }

        res.status(200).json(conversation.messages)

    } catch (error) {
        console.log("Error in get Message Controller : ", error.message)
        res.status(500).json({ error })
    }
}

export {
    sendMessage,
    getMessage
}