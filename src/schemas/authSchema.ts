import Joi from "joi";

export const createUserInfo = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(10).required(),
});

export const createSessionInfo = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
