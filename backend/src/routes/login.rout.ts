import { Router} from 'express'
import UserModel from '../models/userModel'
import { compareHash } from '../lib/helper'
import { getToken } from '../lib/token'

const router = Router()


router.post('/login', async (req,res) => {

    const {username,password}=req.body


    if(!username || !password){
        return res.status(400).send('Credentials are required')
    }

    const exist=await UserModel.findOne({username})

    if(!exist){
        return res.status(400).send('Invalid Credential')
    }   
  
    if(!compareHash(password, exist.password)){
        
        return res.status(400).send('Invalid Credential')
    }

   

    const token=getToken(exist.id)

    res.cookie('token' , token ,{
        httpOnly: false,
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    })

    
    return res.status(200).send('Login successful')


})


export default router


