import express from "express";
import dotenv from "dotenv" ;
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

import authRoutes from './routes/auth.routes.js'
import msgRoutes from './routes/message.routes.js'
import connectDB from "./DataBase/connection.js";
import usersRoutes from './routes/users.routes.js'

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes)   // localhost:5000/auth
app.use('/messages', msgRoutes)   // localhost:5000/message
app.use('/users', usersRoutes)   // localhost:5000/message

connectDB()
    .then(() => {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Listning to PORT ${PORT}`))
    })
    .catch((err) => console.log(`Database Connection Failed ${err.message}`))