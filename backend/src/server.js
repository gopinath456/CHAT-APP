import express from 'express'
import authRouter from './router/auth.route.js';
import { connect } from './lb/db.js';
import cookieParser from 'cookie-parser'
import 'dotenv/config'
connect();
const server=express();

server.use('/api/auth',authRouter);
server.use(cookieParser());
server.use(express.json());

server.get('/',(req,res)=>{res.send('server is up')});
server.listen(process.env.PORT,()=>{console.log('server is up!')});