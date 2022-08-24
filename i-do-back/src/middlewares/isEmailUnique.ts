import { Request, Response, NextFunction } from "express";

import accessRepository from "../repositories/accessRepository.js";
import { conflictError } from "../utils/errorUtils.js";

import { CreateUser } from "../services/accessService.js";

export async function isEmailUnique(req: Request, res: Response, next: NextFunction) {
    let { partner1Email, partner2Email }: { partner1Email: string, partner2Email: string } = res.locals.data;
    const userToken: CreateUser = res.locals.user;
    
    if(userToken){
        const updateUser = checkEmailUpdate(userToken, partner1Email, partner2Email);
        partner1Email = updateUser.partner1Email;
        partner2Email = updateUser.partner2Email;
    }

    const user = await accessRepository.findByEmail(partner1Email, partner2Email);

    if(user) throw conflictError("Email is already being used");

    next();
}

function checkEmailUpdate(userToken: CreateUser, partner1Email: string, partner2Email: string){
    const updateUser = { partner1Email, partner2Email };

    if(userToken.partner1Email === partner1Email){
        updateUser.partner1Email = "not_updating";
    }

    if(userToken.partner2Email === partner2Email){
        updateUser.partner2Email = "not_updating";
    }

    return updateUser;
}