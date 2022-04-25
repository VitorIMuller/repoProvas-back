import { Router } from "express";
import { getAllTests } from "../Controllers/testController.js";
import { ValidateToken } from "../Middlewares/validateTokenMiddleware.js";


const testsRouter = Router();

// testsRouter.use(ValidateToken)
testsRouter.get(
    "/test", getAllTests
)



export default testsRouter;