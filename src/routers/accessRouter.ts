import { Router } from "express";

import { sanitizeInputs } from "../middlewares/sanitizeInputs.js";
import { userProperties } from "../schemas/userSchema.js";
import { signUp } from "../controllers/accessController.js"

const access = Router();

access.post("/sign-up",
    sanitizeInputs(userProperties),
    signUp
);

access.post("/sign-in",

);

export default access;