import express from 'express'
import {singIn,signUp,logOut,updateProfilePic,checkAuth} from '../controllers/auth.contoller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
const router=express.Router();

router.post('/signup',signUp)
router.post('/signin',singIn)
router.post('/logout',logOut)

router.put('/update-profilePic',protectRoute,updateProfilePic);

router.get('/check',protectRoute,checkAuth)

export default router