import * as noteRepository from "../repositories/noteRepository.js";
import { Note } from "@prisma/client";

export async function createNote(noteInfo: Note) {
  return await noteRepository.create(noteInfo);
}

export async function findNotes(userId: number) {
  return await noteRepository.findByUserId(userId);
}

export async function findNote(id: number) {
  return await noteRepository.findById(id);
}

export async function deleteNote(id: number) {
  return await noteRepository.deleteById(id);
}
