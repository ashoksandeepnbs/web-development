//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import {dirname} from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
const port = 4000;
var userIsAuthorised=false;

app.use(bodyParser.urlencoded({extended:true}));

function authentication(req,res,next){
    const pswd=req.body["password"];
    if (pswd === "ILoveProgramming") {
        userIsAuthorised = true;
      }
      next();
 }
app.use(authentication);
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})
app.post("/check",(req,res)=>{
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");

    } else {
        res.send("<h1>Go away ASSHOle!!</h1>")
    }
})
app.listen(port,()=>{
    console.log(`running on port ${port}...`);
})