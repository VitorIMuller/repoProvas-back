import express, { application, json } from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"
import errorHandleMiddleware from "./Middlewares/errorHandlerMiddleware.js"
import router from "./Router/index.js"



const app = express()

dotenv.config();

app.use(cors());
app.use(json());
app.use(router)
app.use(errorHandleMiddleware)


export default app;