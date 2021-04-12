const jwt=require("jsonwebtoken")
const verifyTokenMethod=(req,res,next)=>{
    // read token from req obj header
    let tokenwithBearer=req.headers["authorization"]

    // verify the token
    if(tokenwithBearer){
        // extract token by removing first 7 chars
        let token=tokenwithBearer.slice(7,tokenwithBearer.length)

        //verify the token
        jwt.verify(token,"cpaass",(err,decoded)=>{
            if(err)
            {
                return res.send({message:"Session expired..Please login to continue"})
            }
            else{
                next()
            }
        })
    }

    // if token is not existed
    else{
        return res.send({message:"unauthorized access"})
    }
}

module.exports=verifyTokenMethod