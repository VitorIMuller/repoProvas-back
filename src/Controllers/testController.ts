import { Request, Response } from "express";
import { createTest } from "../interfaces/interfaces.js";
import * as testsServices from "../Services/testsServices.js"


export async function getAllTests(req: Request, res: Response) {
    const data = await testsServices.getAllTests()

    res.status(200).send(data);

}

export async function addViewTest(req: Request, res: Response) {
    const { id } = req.params
    await testsServices.updateCountView(parseInt(id))

    res.sendStatus(200);
}

export async function newTest(req: Request, res: Response) {

    const data: createTest = req.body

    await testsServices.addTest(data)

    res.sendStatus(201);
}