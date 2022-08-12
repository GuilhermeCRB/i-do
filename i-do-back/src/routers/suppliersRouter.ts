import { Router } from "express";

import { searchForSuppliers } from "../controllers/suppliersController.js";
import validateToken from "../middlewares/validateToken.js";

const suppliers = Router();

suppliers.get("/suppliers/:filter",
    validateToken,
    searchForSuppliers
);

export default suppliers;