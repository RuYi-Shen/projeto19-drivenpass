import Joi from "joi";
export var purchaseInfo = Joi.object({
    cardId: Joi.number().required(),
    password: Joi.string().required(),
    businessId: Joi.number().required(),
    amount: Joi.number().positive().integer().required()
});
