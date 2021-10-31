const jwt = require('jsonwebtoken');

const generarJWT = async(uid,name)=>{
 return new Promise((resolve,reject)=>{
     const payload = {uid,name}
     jwt.sign(payload,process.env.SECRET_JWT_SEED,{
         expiresIn:'2h'
     },(err,token)=>{
         if(err){
             reject('no se pudo generar el token')
         }
         else{
             resolve(token)
         }
     })
 })
}
module.exports={
    generarJWT
}