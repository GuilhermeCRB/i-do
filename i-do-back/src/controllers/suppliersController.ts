import { Request, Response } from "express";

import suppliersService from "../services/suppliersService.js";

export async function searchForSuppliers(req: Request, res: Response) {
    const { place, q, start } = req.query;
    const results = await suppliersService.googleSearch(place, q, start);
    res.status(200).send(results);
}