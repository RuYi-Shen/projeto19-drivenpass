import Joi from "joi";
export var createUserInfo = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().length(10).required()
});
export var createSessionInfo = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
