import { Router } from "express";
import { ValidateToken } from "../Middlewares/validateTokenMiddleware.js";


const testsRouter = Router();

testsRouter.use(ValidateToken)
testsRouter.get(
    "/test",
)



export default testsRouter;