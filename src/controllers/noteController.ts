import { Request, Response } from "express";
import * as noteService from "../services/noteService.js";

export async function createNote(req: Request, res: Response) {
  const noteInfo = req.body;
  noteInfo.userId = res.locals.user.id;
  await noteService.createNote(noteInfo);
  res.sendStatus(201);
}

export async function findNote(req: Request, res: Response) {
  const { id } = req.params;
  const note = await noteService.findNote(+id);
  res.json(note);
}

export async function findNotes(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const notes = await noteService.findNotes(userId);
  res.json(notes);
}

export async function deleteNote(req: Request, res: Response) {
  const { id } = req.params;
  await noteService.deleteNote(+id);
  res.sendStatus(204);
}
