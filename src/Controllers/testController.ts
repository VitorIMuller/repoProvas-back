import { Request, Response } from "express";
import * as testsServices from "../Services/testsServices.js"


export async function getAllTests(req: Request, res: Response) {
    const data = await testsServices.getAllTests()

    res.send(data);

}

export async function addViewTest(req: Request, res: Response) {
    const { id } = req.params
    console.log("ola")
    await testsServices.updateCountView(parseInt(id))

    res.sendStatus(200);
}