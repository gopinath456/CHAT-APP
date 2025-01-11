import express from 'express'
import {singIn,signUp,logOut} from '../controllers/auth.contoller.js';
const router=express.Router();

router.post('/signup',signUp)
router.post('/signin',singIn)
router.post('/logout',logOut)

export default router