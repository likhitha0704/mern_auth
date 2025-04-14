import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import authRouter from './routes/auth.routes.js'
connectDB();
let app=express();

//middleware stack
app.use(express.json())

app.use("/api/v1/auth",authRouter)




export default app;