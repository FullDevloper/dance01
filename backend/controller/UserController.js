const User =require("../model/User/User");
const bcrypt =require("bcryptjs");
const MyError =require("../utils/MyError");
const jwt =require("jsonwebtoken");
const asyncHandler =require("express-async-handler");
exports.createUser=asyncHandler(async(req,res,next)=>{
    const {phoneNumber}=req.body;
    const auth=await User.findOne({phoneNumber:phoneNumber})
    if(auth)
    {
     throw new MyError("Уучлаарай та бүртгэлтэй байна.")
    }
    const encryptedpassword=await bcrypt.hash(password,10);

    const user =await User.create({...req.body,password:encryptedpassword});
    const token =jwt.sign({
        userId:user._id,
        
    },process.env.TOKEN_KEY,{
        expiresIn:"24h"
    });

    res.status(200).json({success:true,data:user,token:token});
})
exports.login=asyncHandler(async(req,res,next)=>{
    const {phoneNumber,password}=req.body;
    const checkUser =await User.findOne({phoneNumber:phoneNumber});
    if(!checkUser)
    {
        throw new MyError("Уучлаарай та мэйл хаягаа зөв оруулна уу?",302)

    }
    const checkpass =await bcrypt.compare(password,checkUser.password)
    if(!checkpass)
    {
        throw new MyError("Уучлаарай нууц үг буруу байна.",500)
    }
    const token =jwt.sign({
        userId:checkUser._id,
      
        userMail:checkUser.email
      
    },process.env.TOKEN_KEY,{
        expiresIn:"24h"
    })
    res.status(200).json({success:true,token,data:checkUser})
})