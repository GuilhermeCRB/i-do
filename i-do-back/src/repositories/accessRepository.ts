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

async function updateUserData(user: CreateUser, email: string) {
    return await db.user.update({
        where: {
            partner1Email: email
        },

        data:{
            partner1: user.partner1,
            partner2: user.partner2,
            partner1Email: user.partner1Email,
            partner2Email: user.partner2Email,
        }
    });
}

const accessRepository = {
    saveUserData,
    findByEmail,
    getUserByEmail,
    updateUserData
}

export default accessRepository;