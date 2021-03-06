import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js";

export async function createCredential(req: Request, res: Response) {
  const credentialInfo = req.body;
  credentialInfo.userId = res.locals.user.id;
  await credentialService.createCredential(credentialInfo);
  res.sendStatus(201);
}

export async function findCredential(req: Request, res: Response) {
  const { id } = req.params;
  const credential = await credentialService.findCredential(+id);
  res.json(credential);
}

export async function findCredentials(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const credentials = await credentialService.findCredentials(userId);
  res.json(credentials);
}

export async function deleteCredential(req: Request, res: Response) {
  const { id } = req.params;
  await credentialService.deleteCredential(+id);
  res.sendStatus(204);
}
