import bcrypt from "bcrypt";
import { prisma } from "../../src/database.js";
import * as interfaces from "../../src/interfaces/interfaces.js"


export default async function userFactory(user: interfaces.userSignUp) {
    await prisma.users.create({
        data: {
            ...user,
            password: bcrypt.hashSync(user.password, 8)
        }
    })
}