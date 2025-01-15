import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js';
import { getMessages, getUserForSideBar, sendMessage } from '../controllers/message.controller.js';

const messageRouter=express.Router();

messageRouter.get('/user',protectRoute,getUserForSideBar)
messageRouter.get('/:id',protectRoute,getMessages);

messageRouter.post('/message/:id',protectRoute,sendMessage);

export default messageRouter

