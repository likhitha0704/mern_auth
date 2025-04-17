import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'

connectDB();
let app=express();

//middleware stack
app.use(express.json())

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/users",userRouter)

console.log(userRouter);





export default app;