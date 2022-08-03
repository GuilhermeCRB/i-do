import { Request, Response, NextFunction } from "express";

import accessRepository from "../repositories/accessRepository.js";

export async function isEmailUnique(req: Request, res: Response, next: NextFunction) {
    const { partner1Email, partner2Email }: { partner1Email: string, partner2Email: string } = res.locals.data;
    const user = await accessRepository.getUserByEmail(partner1Email, partner2Email);

    if(user) return res.status(409).send("Email is already being used");

    next();
}