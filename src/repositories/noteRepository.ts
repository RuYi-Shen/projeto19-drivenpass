import client from "../database.js";
import { Note } from "@prisma/client";

export async function create(noteInfo: Note) {
  return await client.note.create({
    data: noteInfo,
  });
}

export async function findByLabel(label: string) {
  return await client.note.findMany({
    where: {
      label,
    },
  });
}

export async function findByUserId(userId: number) {
  return await client.note.findMany({
    where: {
      userId,
    },
  });
}

export async function findById(id: number) {
  return await client.note.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteById(id: number) {
  return await client.note.delete({
    where: {
      id,
    },
  });
}
