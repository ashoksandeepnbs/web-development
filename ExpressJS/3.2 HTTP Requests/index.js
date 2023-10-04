import express from 'express';
const app=express() 
app.get("/",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>believe!</h1>");
});
app.get("/about",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Obey</h1>");
});
app.get("/contact",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Fight</h1>");
});
app.listen(300,()=>{
    console.log(`Running 300`);
 })