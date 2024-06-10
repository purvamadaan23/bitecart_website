import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://vinit:87654321@cluster0.3dbj6uk.mongodb.net/zomato').then(()=>console.log("DB connected"))
}