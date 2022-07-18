import { Router } from "express";
import { createCardInfo } from "../schemas/cardSchema.js";
import { validateSchema, validateToken, validateLabel, validateId } from "../middlewares/validationMiddleware.js";
import { createCard, findCard, findCards, deleteCard } from "../controllers/cardController.js";
import * as cardRepository from "../repositories/cardRepository.js";

const cardRouter = Router();
cardRouter.post("", validateSchema(createCardInfo), validateToken, validateLabel(cardRepository) , createCard);
cardRouter.get("", validateToken, findCards);
cardRouter.get("/:id", validateToken, validateId(cardRepository), findCard);
cardRouter.delete("/:id", validateToken, validateId(cardRepository), deleteCard);

export default cardRouter;