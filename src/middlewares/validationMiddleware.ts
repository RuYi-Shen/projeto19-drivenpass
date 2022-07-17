import cryptr from "cryptr";
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { convertToDate } from "../utils/formatUtils.js";

export function validateSchema(schema: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      console.log(error);
      res
        .status(422)
        .send(error.details.map((e: { message: String }) => e.message));
    }
  };
}

export async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {

  next();
}
