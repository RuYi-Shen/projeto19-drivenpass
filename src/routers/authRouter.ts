import { Router } from "express";
import { createUserInfo, createSessionInfo } from "../schemas/authSchema.js";
import { validateSchema } from "../middlewares/validationMiddleware.js";
import { validateEmail , validatePassword } from "../middlewares/authMiddleware.js";
import { createUser , createSession } from "../controllers/authController.js";

const authRouter = Router();
authRouter.post("/signup", validateSchema(createUserInfo), validateEmail, createUser);
authRouter.post("/signin", validateSchema(createSessionInfo), validatePassword, createSession);

export default authRouter;