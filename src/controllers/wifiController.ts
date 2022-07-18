import { Request, Response } from "express";
import * as wifiService from "../services/wifiService.js";

export async function createWifi(req: Request, res: Response) {
  const wifiInfo = req.body;
  wifiInfo.userId = res.locals.user.id;
  await wifiService.createWifi(wifiInfo);
  res.sendStatus(201);
}

export async function findWifi(req: Request, res: Response) {
  const { id } = req.params;
  const wifi = await wifiService.findWifi(+id);
  res.json(wifi);
}

export async function findWifis(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const wifis = await wifiService.findWifis(userId);
  res.json(wifis);
}

export async function deleteWifi(req: Request, res: Response) {
  const { id } = req.params;
  await wifiService.deleteWifi(+id);
  res.sendStatus(204);
}
