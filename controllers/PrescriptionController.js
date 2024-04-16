import Prescription from "../models/Prescription.js";


export const Create=async (req,res,next)=>{
    try {
        const {name,date,medications,patient,instructions,user,report} = req.body;
        
        const Pres =  await Prescription.create({
            name,
            date,
            report,
            medications,
            patient,
            instructions,
            user
        })

        const saved = await Pres.save();

        return res.status(200).json({message:"Doc created Successfully",Pres:saved});
    } catch (err) {
        next(err)
        
    }
};

export const getPrescription=async (req,res,next)=>{
    try {
        console.log("bye")
        const Id = req.params.id; // Assuming the user ID is provided as a URL parameter
        
        const Pres = await Prescription.find({report:Id });
        
        return res.status(200).json({ Pres});
    } catch (err) {
        next(err)
        
    }
}
export const deletePrescription=async (req,res,next)=>{
    try {
        await Prescription.findByIdAndDelete(req.params.id)
        res.status(200).json("doc has been deleted") 
     } catch (err) {
        next(err);
    }
}

export const getAll=async (req,res,next)=>{
    try {
        //const type = req.params.type; // Assuming the user ID is provided as a URL parameter
        
        const Pres= await Prescription.find();
        
        return res.status(200).json({Pres});
    } catch (err) {
        next(err)
        
    }
} 
export const getPrescriptionbyPatient=async (req,res,next)=>{
    try {
        const userId = req.params.id; // Assuming the user ID is provided as a URL parameter
        
        const Pres = await Prescription.find({ patient: userId });
        
        return res.status(200).json({ Pres});
    } catch (error) {
        next(err)
        
    }
}