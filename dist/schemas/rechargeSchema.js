import Joi from "joi";
export var rechargeInfo = Joi.object({
    cardId: Joi.number().required(),
    amount: Joi.number().positive().integer().required()
});
