const express = require("express");
const app = express();

app.set("view engine", "pug")

// statik dosyalar public içinde bulunacak bunu belirtmemiz gerekiyor.
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.pug");
});

// app.listen(3000);

app.listen(3000, ()=>{
    console.log("Express çalıştı");
});