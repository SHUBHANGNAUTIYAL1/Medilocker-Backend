import Report from "../models/Report.js";


export const uploadSingle=async (req,res,next)=>{
    try {
        const {username,name,user,file,disease,bp,pulse,sugar,heart,surgery,doctor} = req.body;
        
        const Repo =  await Report.create({
            username,
            name,
            user,
            file,
            disease,
            bp,
            pulse,
            sugar,
            heart,
            surgery,
            doctor,
        })

        const saved = await Repo.save();

        return res.status(200).json({message:"Doc created Successfully",Repo:saved});
    } catch (err) {
        next(err)
        
    }
};

export const getuserDocs=async (req,res,next)=>{
    try {
        const userId = req.params.id; // Assuming the user ID is provided as a URL parameter
        
        const Repo = await Report.find({ user: userId});
        
        return res.status(200).json({ Repo });
    } catch (err) {
        next(err)
        
    }
}
export const getreports=async (req,res,next)=>{
    try {
        const userId = req.params.id; // Assuming the user ID is provided as a URL parameter
        
        const Repo = await Report.find({ doctor: userId});
        
        return res.status(200).json({ Repo });
    } catch (error) {
        next(err)
        
    }
}

export const findreports=async (req,res,next)=>{
    try {
        // Assuming the user ID is provided as a URL parameter
        
        const Repo = await Report.findById(req.param.id);
        
        return res.status(200).json({ Repo });
    } catch (error) {
        next(err)
        
    }
}

export const deleteDoc=async (req,res,next)=>{
    try {
        await Report.findByIdAndDelete(req.params.id)
        res.status(200).json("doc has been deleted") 
     } catch (err) {
        next(err);
    }
}

export const Alldocs=async (req,res,next)=>{
    try {
        //const type = req.params.type; // Assuming the user ID is provided as a URL parameter
        
        const Repo= await Report.find();
        
        return res.status(200).json({Repo});
    } catch (err) {
        next(err)
        
    }
} 
export const updateReport=async(req,res,next)=>{
    try {
        const Repo=await Report.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(Repo) 
     }catch (err) {
        next(err);
    }
};