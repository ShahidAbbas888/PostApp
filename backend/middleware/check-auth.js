const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{

    try {
        const token=req.headers.authorization.split(" ")[1];
       const decodedToken= jwt.verify(token,"secret-key");
       req.userData={email:decodedToken.email,userId:decodedToken.userId};
        next();
    } catch (err) {
        console.log(err.message);
        res.status(401).json({message:"You are not Authencated !...."});
        
    }

};

// import it into routes file
