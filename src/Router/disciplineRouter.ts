import { Router } from "express";
import { getAllDisciplines } from "../Controllers/disciplineController.js";
import { ValidateToken } from "../Middlewares/validateTokenMiddleware.js";


const disciplineRouter = Router();

// disciplineRouter.use(ValidateToken)
disciplineRouter.get(
    "/discipline", getAllDisciplines
)



export default disciplineRouter;