const jwt=require("jsonwebtoken")

const authMiddleware=(req,res,next)=>{
    if(!authHeader)return res.status(401).json({message:"Invalid authorization"})

        const token=authHeader.split(" ")[1]
        if(!token)return res.status(401).json({message:"no token provided"})
            try{
                const verifie=jwt.verify(token,process.env.JWT_SECRET)
                req.user=verified
                next()
        }
        catch(err){
            res.status(401).json({message:"Token is not valid"})
        }
}
module.exports=authMiddleware;