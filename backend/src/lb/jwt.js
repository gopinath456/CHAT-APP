import jwt from 'jsonwebtoken'
import 'dotenv/config'
const createToken=(userid,res)=>{
    const token=jwt.sign({id:userid},process.env.KEY,{expiresIn:'4h'})
    res.cookie('token',token,{
    httpOly:true,
    maxAge:7*24*60*60*1000,
    secure:process.env.NODE_ENV==='development'?false:true,
    sameSite:'strict'
})

}

export {createToken}
