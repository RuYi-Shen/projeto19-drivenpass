import client from "../database.js";
import { Wifi } from "@prisma/client";

export async function create(wifiInfo: Wifi) {
  return await client.wifi.create({
    data: wifiInfo,
  });
}

export async function findByLabel(label: string) {
  return await client.wifi.findMany({
    where: {
      label,
    },
  });
}

export async function findByUserId(userId: number) {
  return await client.wifi.findMany({
    where: {
      userId,
    },
  });
}

export async function findById(id: number) {
  return await client.wifi.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteById(id: number) {
  return await client.wifi.delete({
    where: {
      id,
    },
  });
}
