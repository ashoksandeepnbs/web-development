import express from "express";
import morgan from "morgan"
const app = express();
const port = 4000;
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Hello");
});
app.post("/submit",(req,res)=>{
  console.log(req.headers);
  res.sendStatus(201);
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
