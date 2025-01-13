import express from 'express'
import {singIn,signUp,logOut,updateProfilePic} from '../controllers/auth.contoller.js';
const router=express.Router();

router.post('/signup',signUp)
router.post('/signin',singIn)
router.post('/logout',logOut)
router.put('/update-profilePic',updateProfilePic)

export default router