import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Database connected successfully")
    }
    catch (err) {
        console.log(`Database conection Error : ${err.message}`)
        throw new Error(err)
    }
}

export default connectDB