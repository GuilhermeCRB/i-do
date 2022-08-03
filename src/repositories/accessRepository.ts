import db from "../config/database.js";

import { CreateUser } from "../services/accessService.js"

async function saveUserData(userData: CreateUser) {
    await db.user.create({
        data: userData
    });
}

async function getUserByEmail(partner1Email: string, partner2Email: string) {
    return await db.user.findMany({
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

const accessRepository = {
    saveUserData,
    getUserByEmail
}

export default accessRepository;