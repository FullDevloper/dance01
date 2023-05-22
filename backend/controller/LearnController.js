const Learn =require("../model/Learn/Learn");
exports.createLearn=asyncHandler(async(req,res,next)=>{
    const newLearn =await Learn.create({...req.body});
    res.status(200).json({data:newLearn});
})
exports.getsLearn=asyncHandler(async(req,res,next)=>{
    const learns=await Learn.find();
    res.status(200).json({data:learns});
})
exports.getLearn=asyncHandler(async(req,res,next)=>{
    const learns =await Learn.findById(req.params.id);
    res.status(200).json({data:learns})
})