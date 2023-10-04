import express from "express";
const app=express();
const port=5000;
app.get("/",(req,res)=>{
  res.send("<h1>Hello</h1>")
});
app.post("/server",(req,res)=>{
  res.sendStatus(201);
});
app.put("/user/as",(req,res)=>{
  res.sendStatus(200)
});
app.patch("/user/as",(req,res)=>{
  res.sendStatus(200)
});
app.delete("/user/as",(req,res)=>{
  res.sendStatus(200)
});
app.listen(port,()=>{
console.log(`running at ${port}...`);
});