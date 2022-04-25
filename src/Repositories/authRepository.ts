import { prisma } from "../database.js";
import { UserData } from "../Controllers/authController";
import * as interfaces from "../interfaces/interfaces.js"


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

export async function insertOneSession(id: number) {
    const session = await prisma.sessions.create({
        data: { userId: id }
    })
    return session
}

export async function findSession(id: number) {
    console.log(id)
    const session = await prisma.sessions.findUnique({
        where: {
            id
        }
    }
    )

    return session

}