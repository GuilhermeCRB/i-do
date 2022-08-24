import Joi from "joi";

import { CreateUser } from "../services/accessService.js";

export const updateUserProperties = [
    "partner1", 
    "partner2", 
    "partner1Email", 
    "partner2Email", 
    "password"
];

const updateUserSchema = Joi.object<CreateUser>({
    partner1: Joi.string().required(),
    partner2: Joi.string().required(),
    partner1Email: Joi.string().email().required(),
    partner2Email: Joi.string().email(),
    password: Joi.string().required(),
});

export default updateUserSchema;