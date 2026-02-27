import bycript from 'bcrypt'
import crypto from 'crypto'
import { buffer } from 'stream/consumers'


export const hashPassword=(password:string)=>{

    const salt=bycript.genSaltSync(10)
    const hash=bycript.hashSync(password, salt)

    return hash

}

export const compareHash=(password:string, hash:string)=>{
    return bycript.compareSync(password, hash)
}


const encript=(text:string, key:Buffer<ArrayBuffer>)=>{
    const iv=crypto.randomBytes(16)
    const cipher=crypto.createCipheriv('aes-256-cbc', key, iv)

    let encripted=cipher.update(text, 'utf8', 'hex')
    encripted+=cipher.final('hex')
    return iv.toString('hex')+ ':'+ encripted

}


export const generateKeyAndEncript=(text:string)=>{
     const key=crypto.randomBytes(32)
     const encriptedPass=encript(text, key)

     return {key, encriptedPass}
}
