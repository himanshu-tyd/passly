import { Router} from 'express'
import UserModel from '../models/userModel'
import { hashPassword } from '../lib/helper'


const router = Router()


router.post('/register', async(req,res) => {

    const {username, name, password, email}=req.body
    console.log(username, name, password, email)


    if(!username || !name || !password || !email){
        return res.status(400).send('All fields are required')
    }


    const exists=await UserModel.findOne({username})

    if(exists){
        res.status(400).send('User already exists')
        return
    }

    const register=new UserModel({username, name, password: hashPassword(password), email})
    register.save()

    return res.status(200).send('User registered successfully')

})

export default router