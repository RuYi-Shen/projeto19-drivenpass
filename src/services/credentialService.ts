import * as credentialRepository from "../repositories/credentialRepository.js";
import { Credential } from "@prisma/client";
import cryptr from "cryptr";

export async function createCredential(credentialInfo: Credential) {
  const cryptrInstance = new cryptr(process.env.SECRET_KEY || "secret");
  credentialInfo.password = cryptrInstance.encrypt(credentialInfo.password);

  return await credentialRepository.create(credentialInfo);
}

export async function findCredentials(userId: number) {
  const credentials = await credentialRepository.findByUserId(userId);
  const cryptrInstance = new cryptr(process.env.SECRET_KEY || "secret");
  return credentials.map((credential: Credential) => {
    credential.password = cryptrInstance.decrypt(credential.password);
    return credential;
  });
}

export async function findCredential(id: number) {
  const credential = await credentialRepository.findById(id);
  if (!credential) {
    return null;
  }
  const cryptrInstance = new cryptr(process.env.SECRET_KEY || "secret");
  credential.password = cryptrInstance.decrypt(credential.password);
  return credential;
}

export async function deleteCredential(id: number) {
  return await credentialRepository.deleteById(id);
}