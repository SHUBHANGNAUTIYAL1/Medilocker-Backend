import express from "express"
import dotenv from"dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import Reports from "./routes/report.js"
import Prescriptions from "./routes/prescription.js"
import cors from 'cors';

const app=express()
dotenv.config()

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    }catch(error){
        throw error;
    }

    };
    mongoose.connection.on("disconnected",()=>{
        console.log("Mongodb disconnected")
    })
    
    app.use(cors());

    app.use(express.json())
    app.use("/api/auth",authRoute);
    app.use("/api/report",Reports);
    app.use("/api/prescription",Prescriptions);

app.listen(8100,()=>{
    connect();
    console.log("connected")

})
