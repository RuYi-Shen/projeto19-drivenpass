import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialRouter from "./credentialRouter.js";

const router = Router();
router.use("/auth", authRouter);
router.use("/credential", credentialRouter);

export default router;
