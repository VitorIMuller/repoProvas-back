import { Request, Response } from "express";
import * as teachersServices from "../Services/teachersServices.js"


export async function getAllTeachers(req: Request, res: Response) {
    const data = await teachersServices.getAllTeachers()

    res.send(data);

}