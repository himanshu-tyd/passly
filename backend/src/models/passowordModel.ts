import { Schema ,model } from "mongoose";


const passwordSchema=new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    platform_name:{
        type: String,
        required: true
    },
    tag:{
        type: String,
    }
})

const passwordModel=model('Password', passwordSchema)

export default passwordModel