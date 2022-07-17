import Joi from "joi";
export var createCardInfo = Joi.object({
    employeeId: Joi.number().required(),
    type: Joi.string()
        .valid("groceries", "restaurants", "transport", "education", "health")
        .required()
});
export var activateCardInfo = Joi.object({
    cardId: Joi.number().required(),
    password: Joi.string().length(4).regex(/^\d+$/).required(),
    CVC: Joi.string().length(3).regex(/^\d+$/).required()
});
