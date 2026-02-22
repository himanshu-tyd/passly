import bycript from 'bcrypt'



export const hashPassword=(password:string)=>{

    const salt=bycript.genSaltSync(10)
    const hash=bycript.hashSync(password, salt)

    return hash

}

export const compareHash=(password:string, hash:string)=>{
    return bycript.compareSync(password, hash)
}


