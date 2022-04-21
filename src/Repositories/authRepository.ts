import { prisma } from "../database.js";
import { UserData } from "../Controllers/authController";


export async function insert(user: UserData) {
    await prisma.users.create({
        data: user
    });
}

export async function findByEmail(email: string) {
    return await prisma.users.findUnique({
        where: {
            email
        }
    })
}