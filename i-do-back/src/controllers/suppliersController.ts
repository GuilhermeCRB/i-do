import { Request, Response } from "express";

import suppliersService from "../services/suppliersService.js";

export async function searchForSuppliers(req: Request, res: Response) {
    const { filter } = req.params;
    const { q } = req.query;
    const results = await suppliersService.googleSearch(filter, q);
    res.status(200).send(results);
}