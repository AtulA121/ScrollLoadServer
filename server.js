let express=require("express");
let cors=require("cors");
let bodyParser=require("body-parser");
let app=express();
let events=require("./events");
app.use(cors());
app.use(bodyParser.json());
let limit=1;

app.use("/getData",(req,res,next)=>{
    console.log("/getData reqeust : ",req.body);
    let result=[];
    if(limit <= 2){
        result=events.getData()
    }
    limit++;
    res.send({
        result : result
    });
});

app.listen(3000,()=>{
    console.log("server listen on 3000...");
});