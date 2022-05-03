import { users, tests } from "@prisma/client"

export interface user {
    id: number
    email: string
    password: string
}


export type createTest = Omit<Omit<test, "id">, "views">

export type userSignUp = Partial<user>

export type userSignIn = Omit<userSignUp, "name">

export interface session {
    id: number
    userId: number
}
export type test = Required<tests>

export type sessionCreateData = Omit<session, "id">