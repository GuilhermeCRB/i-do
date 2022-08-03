import { Router } from "express";

import { sanitizeInputs } from "../middlewares/sanitizeInputs.js";
import signUpSchema, { signUpProperties } from "../schemas/userSchema.js";
import { signUp } from "../controllers/accessController.js"
import { validateSchema } from "./validateSchema.js";

const access = Router();

access.post("/sign-up",
    sanitizeInputs(signUpProperties),
    validateSchema(signUpSchema),
    signUp
);

access.post("/sign-in",

);

export default access;