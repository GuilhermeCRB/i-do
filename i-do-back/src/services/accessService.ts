import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


import accessRepository from "../repositories/accessRepository.js";
import { notFoundError, unauthorizedError } from "../utils/errorUtils.js";

export type CreateUser = Omit<User &
{ repeatedPassword?: string },
    "id" |
    "createdAt"
>

export interface SignIn { email: string, password: string };

async function signUpUser(user: CreateUser) {
    delete user.repeatedPassword;
    const encryptedPassword = encryptPassword(user.password);
    await accessRepository.saveUserData({ ...user, password: encryptedPassword });
}

function encryptPassword(password: string) {
    const SALT = 10;
    return bcrypt.hashSync(password, SALT);
}

async function signInUser(user: SignIn) {
    const tokenInfo = await matchEmailAndPassword(user);
    return generateToken(tokenInfo);
}

async function matchEmailAndPassword(user: SignIn) {
    const userFromDb: User = await accessRepository.getUserByEmail(user.email);
    if (!userFromDb) throw notFoundError("Email not found.");

    const isValidated: boolean = bcrypt.compareSync(user.password, userFromDb.password);
    if (!userFromDb || !isValidated) throw unauthorizedError("Not allowed. Check your email and password.");

    delete (userFromDb.password); delete (userFromDb.createdAt); delete (userFromDb.id);
    return userFromDb;
}

function generateToken(user: CreateUser) {
    return jwt.sign(user, process.env.SECRET_KEY);
}

async function updateUser(user: CreateUser, partner1Email: string) {
    const userFromToken = { email: partner1Email, password: user.password };
    await matchEmailAndPassword(userFromToken);
    const newUser = await accessRepository.updateUserData(user, partner1Email);

    delete (newUser.password); delete (newUser.createdAt); delete (newUser.id);
    return generateToken(newUser);
}


const accessService = {
    signUpUser,
    signInUser,
    updateUser
};

export default accessService;