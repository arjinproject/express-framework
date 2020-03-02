const express = require("express");
const app = express();

app.set("view engine", "pug")

app.get("/", (req, res)=>{
    res.render("index", {name:"Hamit", surname:"Seyrek"});
});

// app.listen(3000);

app.listen(3000, ()=>{
    console.log("Express çalıştı");
});