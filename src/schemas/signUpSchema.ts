import Joi from "joi";

import { CreateUser } from "../services/accessService.js";

export const signUpProperties = [
    "partner1", 
    "partner2", 
    "partner1Email", 
    "partner2Email", 
    "password", 
    "repeatedPassword" 
];

const signUpSchema = Joi.object<CreateUser>({
    partner1: Joi.string().required(),
    partner2: Joi.string().required(),
    partner1Email: Joi.string().email().required(),
    partner2Email: Joi.string().email(),
    password: Joi.string().required(),
    repeatedPassword: Joi.ref('password')
});

export default signUpSchema;