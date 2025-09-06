import mongoose from "mongoose";

let isConnected = false;

export const connectMongoDB = async () => {
    if (isConnected) return;
    
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
}