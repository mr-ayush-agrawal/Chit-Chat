import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth.context";
import io from "socket.io-client"

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(useSocketContext);
}
export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUser, setOnlineUser] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id
                }
            });
            setSocket(socket)

            socket.on("getOnlineUsers", (users) => {
                setOnlineUser(users)
            })

            return () => socket.close()
        }
        else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [])
    return <>
        <SocketContextProvider value={{ socket, onlineUser }}>
            {children}
        </SocketContextProvider>
    </>
}