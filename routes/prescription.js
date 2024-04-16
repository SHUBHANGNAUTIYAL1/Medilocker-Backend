import  express from "express";
import { Create, deletePrescription, getAll, getPrescription, getPrescriptionbyPatient} from "../controllers/PrescriptionController.js";

const router=express.Router();

router.post("/create",Create)
router.get("/report/:id",getPrescription)
router.get("/pres/:id",getPrescriptionbyPatient)
router.get("/",getAll)
router.delete("/:id",deletePrescription)

export default router