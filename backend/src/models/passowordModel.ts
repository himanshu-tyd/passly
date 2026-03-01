import { Schema ,model } from "mongoose";


const passwordSchema=new Schema({
    userId: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    key:{
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
    notes:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const passwordModel=model('Password', passwordSchema)

export default passwordModel