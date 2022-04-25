
import { Request, Response } from 'express';
import * as categoryServices from "../Services/categoryServices.js"


export async function getAllCategories(req: Request, res: Response) {

    const data = await categoryServices.getAllCategories()

    res.send(data);

};