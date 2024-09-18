import express from 'express'
import cookieParser from 'cookie-parser'
import cors from'cors'

const app= express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
 
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import userRouter from './routes/user.routes.js'
//routes decleration
app.use("/api/v1/users",userRouter)//we cant use app.get directly here becuse we have seperated the file so this route will go to the user.route.js and ther the things will work

// http://localhost:8000/users/register

export {app}