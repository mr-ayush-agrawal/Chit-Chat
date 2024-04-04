import express from "express";
import dotenv from "dotenv" ;
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

import authRoutes from './routes/auth.routes.js'

app.use('/auth', authRoutes)   // localhost:5000/auth


app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))