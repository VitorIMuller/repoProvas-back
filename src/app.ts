import express, { application, json } from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"
import errorHandleMiddleware from "./Middlewares/errorHandlerMiddleware.js"
import router from "./Router/index.js"



const server = express()

dotenv.config();

server.use(cors());
server.use(json());
server.use(router)
server.use(errorHandleMiddleware)


server.listen(process.env.PORT || 4000, () => {
    console.log(`Running in ${process.env.PORT}`)
})