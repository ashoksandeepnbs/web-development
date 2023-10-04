import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName=""
app.use(bodyParser.urlencoded({extended:true}))
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["First-name"] + req.body["Second-name"];
  next();
}

app.use(bandNameGenerator);
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");})

app.post("/submit",(req,res)=>{
  res.send(`the band name is <h1>${bandName}</h1>`)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
