import { Request, Response } from "express";

import accessService, { CreateUser, SignIn } from "../services/accessService.js";

export async function signUp(req: Request, res: Response) {
    const user: CreateUser = res.locals.data;
    await accessService.signUpUser(user);
    res.sendStatus(201);
}

export async function signIn(res: Response) {
    const user: SignIn = res.locals.data;
    const token = await accessService.signInUser(user);
    res.status(200).send({ token });
}

export async function updateAccount(req: Request, res: Response) {
    const updateUser: CreateUser = res.locals.data;
    const { partner1Email }: { partner1Email: string } = res.locals.user;
    const newToken = await accessService.updateUser(updateUser, partner1Email);
    res.status(200).send({ token: newToken });
}