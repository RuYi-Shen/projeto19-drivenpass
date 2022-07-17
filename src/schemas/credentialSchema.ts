import Joi from "joi";
import { Credential } from "@prisma/client";

export const createCredentialInfo = Joi.object<Credential>({
  url: Joi.string().uri().required(),
  label: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});
