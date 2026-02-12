import { Router} from 'express'
import RegisterModel from '../models/register.schema'


const router = Router()


router.post('/register', (req,res) => {

    const {username, name, password, email}=req.body


    if(!username || !name || !password || !email){
        return res.status(400).send('All fields are required')
    }


    const exists=RegisterModel.findOne({username})
    if(exists){
        return res.status(400).send('User already exists')
    }

    const register=new RegisterModel({username, name, password, email})
    register.save()

    return res.status(200).send('User registered successfully')

})



