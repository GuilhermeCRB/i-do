import supertest from "supertest";
import dotenv from "dotenv";

import db from "../src/config/database";
import app from "../src/app";
import userFactory from "./factories/userFactory.js";
import accessRepository from "../src/repositories/accessRepository.js";
import { CreateUser } from "../src/services/accessService.js";

beforeEach(async () => {
    await db.$transaction([
        db.$executeRaw`TRUNCATE TABLE users`
    ]);
});

dotenv.config();

describe("Access tests:", () => {
    it("Given an email and a password, sign up a user.", async () => {
        const user: CreateUser = userFactory.createUser();
        const response = await supertest(app).post("/sign-up").send(user);
        expect(response.statusCode).toBe(201);

        const createdUser = accessRepository.getUserByEmail(user.partner1Email);
        expect(createdUser).not.toBeNull();
    });

    it("Given an email and a password, sign in a user.", async () => {
        const user: CreateUser = userFactory.createUser();
        await supertest(app).post("/sign-up").send(user);

        const signIn = { email: user.partner1Email, password: user.password };
        const response = await supertest(app).post("/sign-in").send(signIn);
        expect(response.statusCode).toBe(200);

        const { token }: { token: string } = response.body;
        expect(token).not.toBeNull();
    });

    it("Block sign in if password is wrong.", async () => {
        const user: CreateUser = userFactory.createUser();
        await supertest(app).post("/sign-up").send(user);

        const signIn = { email: user.partner1Email, password: "wrongPassword" };
        const response = await supertest(app).post("/sign-in").send(signIn);
        expect(response.statusCode).toBe(401);
    });
});

afterAll(async () => {
    await db.$disconnect();
});