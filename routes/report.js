import  express from "express";
import {uploadSingle,getuserDocs, deleteDoc,Alldocs, getreports, findreports, updateReport} from "../controllers/ReportController.js";

const router=express.Router();

router.post("/upload-single",uploadSingle)
router.get("/user/:id",getuserDocs)
router.get("/",Alldocs)
router.delete("/:id",deleteDoc)
router.get("/patient/:id",getreports)
router.get("/:id",findreports)
router.put("/update/:id",updateReport)

export default router