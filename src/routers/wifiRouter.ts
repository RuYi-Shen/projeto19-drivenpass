import { Router } from "express";
import { createWifiInfo } from "../schemas/wifiSchema.js";
import { validateSchema, validateToken, validateId } from "../middlewares/validationMiddleware.js";
import { createWifi, findWifi, findWifis, deleteWifi } from "../controllers/wifiController.js";
import * as wifiRepository from "../repositories/wifiRepository.js";

const wifiRouter = Router();
wifiRouter.post("", validateSchema(createWifiInfo), validateToken, createWifi);
wifiRouter.get("", validateToken, findWifis);
wifiRouter.get("/:id", validateToken, validateId(wifiRepository), findWifi);
wifiRouter.delete("/:id", validateToken, validateId(wifiRepository), deleteWifi);

export default wifiRouter;