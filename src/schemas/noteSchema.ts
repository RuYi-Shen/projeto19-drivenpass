import Joi from "joi";
import { Note } from "@prisma/client";

export const createNoteInfo = Joi.object<Note>({
  label: Joi.string().max(50).required(),
  content: Joi.string().max(1000).required(),
});
