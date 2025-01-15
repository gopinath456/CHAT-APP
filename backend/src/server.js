import express from 'express'
import authRouter from './router/auth.route.js';
import messageRouter from './router/message.router.js';
import { connect } from './lb/db.js';
import cookieParser from 'cookie-parser'
import 'dotenv/config'
connect();
const server=express();

server.use(cookieParser());
server.use(express.json());

server.use('/api/auth',authRouter);
server.use('/api/message',messageRouter)


server.get('/',(req,res)=>{res.send('server is up')});
server.listen(process.env.PORT,()=>{console.log('server is up!')});