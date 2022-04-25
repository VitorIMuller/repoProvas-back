import { Router } from "express";
import { getAllTerms } from "../Controllers/termController.js";
import { ValidateToken } from "../Middlewares/validateTokenMiddleware.js";


const termsRouter = Router();

// termsRouter.use(ValidateToken)
termsRouter.get(
    "/term", getAllTerms
)



export default termsRouter;