import { Router } from "express";
import { signIn, signUp } from "../Controllers/authController.js";
import validateSchemamiddleware from "../Middlewares/validateSchemaMiddleware.js";
import { authSchema } from "../Schemas/authSchema.js";


const authRouter = Router();


authRouter.post(
    "/signIn",
    validateSchemamiddleware(authSchema),
    signIn
)
authRouter.post(
    "/signUp",
    validateSchemamiddleware(authSchema),
    signUp
)


export default authRouter;