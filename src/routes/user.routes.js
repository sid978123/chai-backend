import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

console.log("registerUser is:", registerUser);

const router = Router();
router.route("/register").post(registerUser);
export default router;
