import express from "express"
import sum from "./sum.js";

const app = express();
const PORT = 8000;

app.get("/hi" , (req ,res)=>{
    res.send("Hi bro How are you ?..")
})

app.get("/" , (req , res)=>{
    res.json({message : "Iam the topper of this class!!"});
})

app.get("/sum/:a/:b" , async(req , res)=>{
    const {a , b} = req.params;

    return res.json({ans : sum(parseInt(a) , parseInt(b)) })
})

app.listen(PORT, ()=>{
    console.log("Server running at port : 8000");
    
})