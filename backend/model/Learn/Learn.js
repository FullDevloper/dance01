const mongoose =require("mongoose");
const LearnSchema=new mongoose({
    LearnName:{type:String},
    LearnTeacher:{type:String},
    Category:{type:mongoose.Schema.Types.ObjectId,
    ref:"Category"
    },
    LearnOgnoo:{type:String},
    LearnDescription:{type:String},
    LearnImage:{type:String}
})
module.exports=mongoose.model("Learn",LearnSchema);