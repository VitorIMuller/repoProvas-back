import { Router } from "express"
import authRouter from "./authRouter.js"
import categoryRouter from "./categoryRouter.js"
import termsRouter from "./termsRouter.js"



const router = Router()

router.use(authRouter)
router.use(categoryRouter)
router.use(termsRouter)


export default router