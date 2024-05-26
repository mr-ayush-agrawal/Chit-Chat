import { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import useConversation from '../zustand/useConversation'

const useListenMessage = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation()

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            setMessages([...messages, newMessage])
        })

        return () => socket.off("newMessage")
    }, [socket, setMessages, messgaes])
}

export default useListenMessage