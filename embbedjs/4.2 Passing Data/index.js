import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const len=req.body["fName"].length+req.body["lName"].length;
  var Name=req.body["fName"]+req.body["lName"];
  res.render("index.ejs",{num:len,
    Name:Name,
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
