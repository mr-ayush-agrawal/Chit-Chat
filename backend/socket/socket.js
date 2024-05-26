import { Server } from 'socket.io'
import http from 'http'
import expess from 'express'

const app = expess();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000'],
        methods: ["GET", "POST"]
    }
});

export const getReciverSocketId = (reciverId) => {
    return userSocketMap[reciverId];
}
const userSocketMap = {}; // {userId, socketId}


io.on('connection', (socket) => {
    console.log("a user connected", socket.id)

    const userId = socket.handshake.query.userId;
    if(userId != "undefined")
        userSocketMap[userId] = socket.id

    io.emit("getOnlineUseres", Object.keys(userSocketMap));
    
    socket.on("disconnect", ()=>{
        console.log("user disconnected", socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUseres", Object.keys(userSocketMap));
    })
})

export {app, io, server}