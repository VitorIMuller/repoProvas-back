import { Router } from "express";
import { getAllTeachers } from "../Controllers/teachersController.js";
import { ValidateToken } from "../Middlewares/validateTokenMiddleware.js";


const teachersRouter = Router();

// teachersRouter.use(ValidateToken)
teachersRouter.get(
    "/teacher", getAllTeachers
)



export default teachersRouter;