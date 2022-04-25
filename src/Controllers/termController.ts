import { Request, Response } from "express";
import * as termsServices from "../Services/termsServices.js"


export async function getAllTerms(req: Request, res: Response) {
    const data = await termsServices.getAllTerms()

    res.send(data);

}