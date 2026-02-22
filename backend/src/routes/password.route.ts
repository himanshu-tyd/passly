import express from 'express'
import passwordModel from '../models/passowordModel'

const router=express.Router()



router.post('/password', async (req,res) => {

    const {username,platform_name, password, email, tag}=req.body


    if(!username || !platform_name || !password || !email){
        return res.status(400).send('All fields are required')
    }


    const exists=await passwordModel.findOne({platform_name})


    if(exists){
        res.status(400).send('Already exists')
        return
    }

    const register=new passwordModel({username,platform_name, password, email, tag})
    register.save()

    return res.status(200).send('Password saved successfully')

})