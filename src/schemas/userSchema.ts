import Joi from "joi";

import { CreateUser } from "../services/accessService.js";

export const signUpProperties = [
    "bride", 
    "groom", 
    "brideEmail", 
    "groomEmail", 
    "bridePassword", 
    "groomPassword", 
    "repeatedBridePassword", 
    "repeatedGroomPassword"
];

const signUpSchema = Joi.object<CreateUser>({
    bride: Joi.string(),
    groom: Joi.string(),
    brideEmail: Joi.string().email(),
    groomEmail: Joi.string().email(),
    bridePassword: Joi.string(),
    groomPassword: Joi.string(),
    repeatedBridePassword: Joi.ref('bridePassword'),
    repeatedGroomPassword: Joi.ref('groomPassword')
});

export default signUpSchema;