import mongoose from "mongoose";


const PrescriptionSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        

    },
    date: {
        type: Date,
        default: Date.now,
        
      },
      medications: [{
        medicationName: String,
        dosage: String,
        frequency: String,

      }],

      patient:{
        type:String,
        required:true,
      },
      report:{
        type:String,
        required:true,
      },
      instructions: {
        type:String,
        required:true,
      },
  

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencing the User model
    }
   
},{timestamps:true})

export default mongoose.model("Prescription",PrescriptionSchema)