import { Router } from "express";
import { getAllCategories } from "../Controllers/categoryController.js";
import { ValidateToken } from "../Middlewares/validateTokenMiddleware.js";


const categoryRouter = Router();

// categoryRouter.use(ValidateToken)
categoryRouter.get(
    "/category", getAllCategories
)



export default categoryRouter;