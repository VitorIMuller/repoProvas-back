import { Router } from "express";
import * as testController from "../Controllers/testController.js";
import validateSchemamiddleware from "../Middlewares/validateSchemaMiddleware.js";
import { ValidateToken } from "../Middlewares/validateTokenMiddleware.js";
import testSchema from "../Schemas/testSchema.js";


const testsRouter = Router();

testsRouter.use(ValidateToken)
testsRouter.get("/test", testController.getAllTests)

testsRouter.post("/test", validateSchemamiddleware(testSchema), testController.newTest)

testsRouter.patch("/test/:id/addView", testController.addViewTest)


export default testsRouter;