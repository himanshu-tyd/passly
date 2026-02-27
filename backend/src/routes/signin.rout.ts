import { Router} from 'express'
import UserModel from '../models/userModel'
import { compareHash } from '../lib/helper'
import { getToken } from '../lib/token'

const router = Router()


router.post('/signin', async (req,res) => {

    const {email,password}=req.body


    if(!email || !password){
        return res.status(400).json({success:false, message:"Field Required"})
    }

    const exist=await UserModel.findOne({email}).populate("password")

    if(!exist){
        return res.status(400).json({success:false, message:'Invalid Credentials'})
    }   
  
    if(!compareHash(password, exist.password)){
        
        return res.status(400).json({success:false, message:'Invalid Credentials'})
    }

   

    const token=getToken(exist.id)

    res.cookie('token' , token ,{
        httpOnly: false,
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    })

    
    return res.status(200).json({success:true, message:'Login SuccessFull', data:exist})


})


export default router


