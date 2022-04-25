import jwt from "jsonwebtoken"
import { UserData } from "../Controllers/authController"
import bcrypt from "bcrypt"
import * as authRepository from "../Repositories/authRepository.js"
import dotenv from "dotenv"
import * as interfaces from "../interfaces/interfaces.js"
dotenv.config()

export async function verifyToken(token: string) {

    const secretKey = process.env.JWT_SECRET
    console.log(secretKey)
    const sessionId = jwt.verify(token, secretKey) as string

    const session = await authRepository.findSession(parseInt(sessionId))

    return session.userId
}

export async function signUp(user: interfaces.userSignUp) {

    const { email, password } = user

    const findEmail = await authRepository.findByEmail(email)
    if (findEmail) throw {
        type: "Conflict",
        message: "Email já existe!"
    }


    const hashPassword = bcrypt.hashSync(password, 8);

    await authRepository.insert({
        email,
        password: hashPassword
    })
}

export async function signIn({ email, password }: UserData) {

    const user = await authRepository.findByEmail(email)
    if (!user) throw {
        type: 'Unauthorized', message: 'User not found!'
    };

    const checkPassword = bcrypt.compareSync(password, user.password)
    if (!checkPassword) throw {
        type: "Unauthorized", message: "Incorrect Password"
    }

    const session = await authRepository.insertOneSession(user.id)
    const token = jwt.sign({ id: session.id.toString() }, `${process.env.JWT_SECRET}`);

    return token
}

