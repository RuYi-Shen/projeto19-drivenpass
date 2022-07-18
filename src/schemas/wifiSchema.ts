import Joi from "joi";
import { Wifi } from "@prisma/client";

export const createWifiInfo = Joi.object<Wifi>({
  label: Joi.string().required(),
  ssid: Joi.string().required(),
  password: Joi.string().required(),
});
