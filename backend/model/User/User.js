const mongoose =require("mongoose");
const UserSchema =new mongoose({
    Firstname:{type:String,required:true},
    LastName:{type:String,required:true},
    gender:{type:String},
    age:{type:String},
    phoneNumber:{type:String},
    // LearnId:[type:""],
    password:{type:String}
})
module.exports=mongoose.model("User",UserSchema);