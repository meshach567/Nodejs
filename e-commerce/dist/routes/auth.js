import { login } from "../controllers/login.js";
import { Router } from "express";
const authRoutes = Router();
authRoutes.get('/login', login);
export default authRoutes;
//# sourceMappingURL=auth.js.map