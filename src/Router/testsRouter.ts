import { Router } from "express";
import * as testController from "../Controllers/testController.js";
import { ValidateToken } from "../Middlewares/validateTokenMiddleware.js";


const testsRouter = Router();

testsRouter.use(ValidateToken)
testsRouter.get(
    "/test", testController.getAllTests
)

testsRouter.patch(
    "test/:id/addView", testController.addViewTest
)



export default testsRouter;