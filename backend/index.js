const express =require("express")
const http =require("http");
const path =require("path");
const cors =require("cors")
const ConnectDb=require("./config/db/db")

const app=express();
require("dotenv").config({path:"./config/config.env"})

ConnectDb();
const PORT  =process.env.PORT || process.env.API_PORT
var whitelist=["http://localhost:3000"];
var corsOptions={
    origin:function(origin,callback){
        if(origin === undefined || whitelist.indexOf(origin) !==1)
        {
            callback(null,true)
        }
        else {
            callback(new Error("Horigloj baina"))
        }
    },
    allowedHeaders:"Authorization,SetCookie, Content-Type",
    methods:"GET,POST,PUT,DELETE,PATCH",
    credentials:true
}
app.use(express.json());
app.use(cors(corsOptions));
const server =http.createServer(app);
server.listen(PORT,()=>{
    console.log(`Сервэр ажиллаж байна. Порт нь ${PORT}`)
});
