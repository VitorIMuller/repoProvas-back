import { Request, Response } from "express";
import * as disciplinesServices from "../Services/disciplinesServices.js"


export async function getAllDisciplines(req: Request, res: Response) {
    const data = await disciplinesServices.getAllDisciplines()

    res.send(data);

}