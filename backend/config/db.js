import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://purvamadaan418:BBiwox1D26ijfvep@cluster0.r38eh.mongodb.net/biteCart').then(()=>console.log("DB connected"))
}
