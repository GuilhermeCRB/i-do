import { Request, Response } from "express";

import suppliersService from "../services/suppliersService.js";

export async function searchForSuppliers(req: Request, res: Response) {
    const { place } = req.query;
    const { q } = req.query;
    const results = await suppliersService.googleSearch(place, q);
    res.status(200).send(results);
}