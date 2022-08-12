import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { unauthorizedError } from "../utils/errorUtils.js";

export default function validateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer", "").trim();

    if (!token) throw unauthorizedError("Must send a token");

    jwt.verify(token, process.env.SECRET_KEY, (e, user) => {
        if(e) throw unauthorizedError("Invalid token");
        res.locals.user = user;
    });

    next();
}