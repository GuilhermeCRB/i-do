import Joi from "joi";

import { SignIn } from "../services/accessService.js";

export const signInProperties = [
    "email", 
    "password"
];

const signInSchema = Joi.object<SignIn>({
    email: Joi.string().email(),
    password: Joi.string().required()
});

export default signInSchema;