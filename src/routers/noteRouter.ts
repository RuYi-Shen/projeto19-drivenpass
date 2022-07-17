import { Router } from "express";
import { createNoteInfo } from "../schemas/noteSchema.js";
import { validateSchema, validateToken, validateLabel, validateId } from "../middlewares/validationMiddleware.js";
import { createNote, findNote, findNotes, deleteNote } from "../controllers/noteController.js";
import * as noteRepository from "../repositories/noteRepository.js";

const noteRouter = Router();
noteRouter.post("", validateSchema(createNoteInfo), validateToken, validateLabel(noteRepository) , createNote);
noteRouter.get("", validateToken, findNotes);
noteRouter.get("/:id", validateToken, validateId(noteRepository), findNote);
noteRouter.delete("/:id", validateToken, validateId(noteRepository), deleteNote);

export default noteRouter;