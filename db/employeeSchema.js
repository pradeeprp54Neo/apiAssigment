import  mongoose  from "mongoose";
const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    }
})
export default mongoose.model("emp",empSchema)