import  express from "express";
import { register,login ,AllUser,deleteUser, getUser} from "../controllers/authController.js";

const router=express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/",AllUser);
router.delete("/:id",deleteUser);
router.get("/user/:id",getUser);


export default router