import { Request, Response } from "express";
import * as testsServices from "../Services/testsServices.js"


export async function getAllTests(req: Request, res: Response) {
    const data = await testsServices.getAllTests()

    res.send(data);

}