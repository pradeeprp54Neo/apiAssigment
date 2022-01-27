import mongoose from 'mongoose';
const db= "mongodb://localhost:27017/api_crud"
export const connectDB=async()=>{
    try{
        await mongoose.connect(db,{useNewUrlParser:true});
        console.log("MondoDB connected")
    }
    catch(err){
        console.log(err.message)
    }
}