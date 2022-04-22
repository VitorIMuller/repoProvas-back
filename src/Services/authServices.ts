import jwt from "jsonwebtoken"
import { UserData } from "../Controllers/authController"
import bcrypt from "bcrypt"
import * as authRepository from "../Repositories/authRepository.js"


export async function signUp(user: UserData) {

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