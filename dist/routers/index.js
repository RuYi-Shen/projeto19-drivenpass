import { Router } from "express";
import authRouter from "./authRouter.js";
var router = Router();
router.use("/auth", authRouter);
export default router;
