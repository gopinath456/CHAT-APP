import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js';
import { getUserForSideBar } from '../controllers/message.controller.js';

const messageRouter=express.Router();

messageRouter.post('/user',protectRoute,getUserForSideBar)

export default messageRouter

