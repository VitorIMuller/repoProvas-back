import { Router } from "express"
import authRouter from "./authRouter.js"
import categoryRouter from "./categoryRouter.js"
import disciplineRouter from "./disciplineRouter.js"
import teachersRouter from "./teachersRouter.js"
import termsRouter from "./termsRouter.js"
import testsRouter from "./testsRouter.js"



const router = Router()

router.use(authRouter)
router.use(categoryRouter)
router.use(termsRouter)
router.use(disciplineRouter)
router.use(teachersRouter)
router.use(testsRouter)


export default router