
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://rahulr41180:Rahul12345@cluster0.zkculwy.mongodb.net/email-generator");
        console.log("Database connected");
    } catch(error) {
        
    }
}