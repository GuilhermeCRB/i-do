import { Router } from "express";

import { searchForSuppliers } from "../controllers/suppliersController.js";

const suppliers = Router();

suppliers.get("/suppliers/:filter",
    searchForSuppliers
);

export default suppliers;