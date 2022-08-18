import { Router } from "express";

import { sanitizeInputs } from "../middlewares/sanitizeInputs.js";
import { signIn, signUp, updateAccount } from "../controllers/accessController.js"
import { validateSchema } from "../middlewares/validateSchema.js";
import { isEmailUnique } from "../middlewares/isEmailUnique.js";
import signUpSchema, { signUpProperties } from "../schemas/signUpSchema.js";
import signInSchema, { signInProperties } from "../schemas/signInSchema.js";
import updateUserSchema, { updateUserProperties } from "../schemas/updateUserSchema.js";
import validateToken from "../middlewares/validateToken.js";

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

access.post("/account/update",
    validateToken,
    sanitizeInputs(updateUserProperties),
    validateSchema(updateUserSchema),
    isEmailUnique,
    updateAccount
);

export default access;