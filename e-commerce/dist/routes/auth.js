import { signup } from "../controllers/signup.js";
import { Router } from "express";
const authRoutes = Router();
authRoutes.post('/signup', signup);
export default authRoutes;
//# sourceMappingURL=auth.js.map