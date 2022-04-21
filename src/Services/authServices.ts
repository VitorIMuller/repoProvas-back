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