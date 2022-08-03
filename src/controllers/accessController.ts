import { Request, Response } from "express";

import { CreateUser } from "../services/accessService.js";

export async function signUp(req: Request, res: Response) {
    const user: CreateUser = res.locals.data;
    console.log(user)
    res.sendStatus(201);
}