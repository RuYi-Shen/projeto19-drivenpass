import Joi from "joi";
import { Card } from "@prisma/client";

export const createCardInfo = Joi.object<Card>({
  label: Joi.string().required(),
  cardNumber: Joi.string()
    .length(16)
    .pattern(/^[0-9]{16}$/)
    .required(),
  cardHolder: Joi.string().required(),
  expiryDate: Joi.string()
    .length(4)
    .pattern(/^[0-9]{4}$/)
    .required(),
  cvv: Joi.string()
    .length(3)
    .pattern(/^[0-9]{3}$/)
    .required(),
  pin: Joi.string()
    .length(4)
    .pattern(/^[0-9]{4}$/)
    .required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().valid("credit", "debit", "credit/debit").required(),
});
