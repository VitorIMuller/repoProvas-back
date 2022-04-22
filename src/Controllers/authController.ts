import { users } from "@prisma/client";
import { Request, Response } from "express";
import * as authService from "../Services/authServices.js"


export type UserData = Omit<users, "id">


export async function signUp(req: Request, res: Response) {
    const user: UserData = req.body
    await authService.signUp(user)
    res.sendStatus(200)
}

export async function signIn(req: Request, res: Response) {
    const user: UserData = req.body

    const token = await authService.signIn(user)

    res.send(token).status(200)
}   
