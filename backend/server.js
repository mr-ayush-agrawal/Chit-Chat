import express from "express";
import dotenv from "dotenv" ;
dotenv.config();
const app = express();

import authRoutes from './routes/auth.routes.js'
import connectDB from "./DataBase/connection.js";

app.use('/auth', authRoutes)   // localhost:5000/auth


connectDB()
    .then(() => {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Listning to PORT ${PORT}`))
    })
    .catch((err) => console.log(`Database Connection Failed ${err.message}`))