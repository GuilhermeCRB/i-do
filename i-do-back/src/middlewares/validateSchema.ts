import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import { unprocessableEntityError } from "../utils/errorUtils.js";

export function validateSchema(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(res.locals.data, { abortEarly: false });
        if (error) {
            throw unprocessableEntityError(error.details.map(detail => detail.message));
        }

        next();
    }
};