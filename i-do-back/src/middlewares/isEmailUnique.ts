import { Request, Response, NextFunction } from "express";

import accessRepository from "../repositories/accessRepository.js";
import { conflictError } from "../utils/errorUtils.js";

export async function isEmailUnique(req: Request, res: Response, next: NextFunction) {
    const { partner1Email, partner2Email }: { partner1Email: string, partner2Email: string } = res.locals.data;
    const user = await accessRepository.findByEmail(partner1Email, partner2Email);

    if(user) throw conflictError("Email is already being used");

    next();
}