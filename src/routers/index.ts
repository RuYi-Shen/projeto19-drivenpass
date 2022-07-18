import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialRouter from "./credentialRouter.js";
import noteRouter from "./noteRouter.js";
import cardRouter from "./cardRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();
router.use("/auth", authRouter);
router.use("/credential", credentialRouter);
router.use("/note", noteRouter);
router.use("/card", cardRouter);
router.use("/wifi", wifiRouter);

export default router;
