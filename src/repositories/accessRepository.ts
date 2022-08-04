import db from "../config/database.js";

import { CreateUser } from "../services/accessService.js"

async function saveUserData(userData: CreateUser) {
    await db.user.create({
        data: userData
    });
}

async function findByEmail(partner1Email: string, partner2Email: string) {
    return await db.user.findFirst({
        where: {
            OR: [
                { partner1Email }, 
                { partner2Email }, 
                { partner1Email: partner2Email }, 
                { partner2Email: partner1Email }
            ]
        }
    });
}

async function getUserByEmail(email: string) {
    return await db.user.findFirst({
        where: {
            OR: [
                { partner1Email: email }, 
                { partner2Email: email }
            ]
        }
    });
}

const accessRepository = {
    saveUserData,
    findByEmail,
    getUserByEmail
}

export default accessRepository;