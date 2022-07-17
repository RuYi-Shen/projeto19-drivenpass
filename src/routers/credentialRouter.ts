import { Router } from "express";
import { createCredentialInfo } from "../schemas/credentialSchema.js";
import { validateSchema, validateToken, validateLabel } from "../middlewares/validationMiddleware.js";
import { createCredential, findCredential, findCredentials, deleteCredential } from "../controllers/credentialController.js";
import * as credentialRepository from "../repositories/credentialRepository.js";

const credentialRouter = Router();
credentialRouter.post("", validateSchema(createCredentialInfo), validateToken, validateLabel(credentialRepository) , createCredential);
credentialRouter.get("", validateToken, findCredentials);
credentialRouter.get("/:id", validateToken, findCredential);
credentialRouter.delete("/:id", validateToken, deleteCredential);

export default credentialRouter;