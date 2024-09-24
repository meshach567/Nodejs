import { login } from "../controllers/login.js";
import { signup } from "../controllers/signup.js";
import { Router } from "express";

const authRoutes:Router = Router()

authRoutes.post('/signup', signup);
authRoutes.post('/login', login)

export default authRoutes;