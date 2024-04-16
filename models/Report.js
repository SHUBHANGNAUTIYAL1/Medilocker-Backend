import mongoose from "mongoose";


const ReportSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        required:true,
    },
    disease:{
        type:String,
        required:true,
    },
    sugar:{
        type:Number,
        required:true,
    },
    bp:{
        type:Number,
        required:true,
    },
    heart:{
        type:Number,
        required:true,
    },
    pulse:{
        type:Number,
        required:true,
    },
    surgery:{
        type:String,
        required:true,
    },
    doctor:{
        type:String,
        required:true,

    },
    status:{
        type:Boolean,
        default:false,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencing the User model
    }
   
},{timestamps:true})

export default mongoose.model("Report",ReportSchema)