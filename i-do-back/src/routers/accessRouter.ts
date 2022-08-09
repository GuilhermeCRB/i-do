import { Router } from "express";

import { sanitizeInputs } from "../middlewares/sanitizeInputs.js";
import signUpSchema, { signUpProperties } from "../schemas/signUpSchema.js";
import { signIn, signUp } from "../controllers/accessController.js"
import { validateSchema } from "./validateSchema.js";
import { isEmailUnique } from "../middlewares/isEmailUnique.js";
import signInSchema, { signInProperties } from "../schemas/signInSchema.js";

const access = Router();

access.post("/sign-up",
    sanitizeInputs(signUpProperties),
    validateSchema(signUpSchema),
    isEmailUnique,
    signUp
);

access.post("/sign-in",
    sanitizeInputs(signInProperties),
    validateSchema(signInSchema),
    signIn
);

export default access;