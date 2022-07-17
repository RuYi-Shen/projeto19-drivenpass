import client from "../database.js";
import { Credential } from "@prisma/client";
import exp from "constants";

export async function create(credentialInfo: Credential) {
  return await client.credential.create({
    data: credentialInfo,
  });
}

export async function findByLabel(label: string) {
  return await client.credential.findUnique({
    where: {
      label,
    },
  });
}

export async function findByUserId(userId: number) {
  return await client.credential.findMany({
    where: {
      userId,
    },
  });
}

export async function findById(id: number) {
  return await client.credential.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteById(id: number) {
  return await client.credential.delete({
    where: {
      id,
    },
  });
}
