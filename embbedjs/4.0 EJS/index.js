import express from 'express';
import ejs from "ejs";
const app=express();
const port = 300;
app.get("/",(req,res)=>{
    const d = new Date();
    const day = d.getDay();
    var type="a weekday";
    var adv="get to work Dumbass!!!"
    if (day===0 || day===6) {
        type="a weekend";
        adv="Don't leave the bed"
    }

    res.render("index.ejs",{
        dayType:type,
        advice:adv,
    })
})

app.listen(port,()=>{
    console.log(`running at port ${port}..`);
})