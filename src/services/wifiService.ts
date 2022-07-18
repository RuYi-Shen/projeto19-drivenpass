import * as wifiRepository from "../repositories/wifiRepository.js";
import { Wifi } from "@prisma/client";
import cryptr from "cryptr";

export async function createWifi(wifiInfo: Wifi) {
  const cryptrInstance = new cryptr(process.env.SECRET_KEY || "secret");
  wifiInfo.password = cryptrInstance.encrypt(wifiInfo.password);
  return await wifiRepository.create(wifiInfo);
}

export async function findWifis(userId: number) {
  const wifis = await wifiRepository.findByUserId(userId);
  const cryptrInstance = new cryptr(process.env.SECRET_KEY || "secret");
  return wifis.map((wifi: Wifi) => {
    wifi.password = cryptrInstance.decrypt(wifi.password);
    return wifi;
  });
}

export async function findWifi(id: number) {
  const wifi = await wifiRepository.findById(id);
  if (!wifi) {
    return null;
  }
  const cryptrInstance = new cryptr(process.env.SECRET_KEY || "secret");
  wifi.password = cryptrInstance.decrypt(wifi.password);
  return wifi;
}

export async function deleteWifi(id: number) {
  return await wifiRepository.deleteById(id);
}
