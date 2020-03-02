const express = require("express");
const app = express();

/**
 * get-put-post-all
 * 
 * ? zorunlu olmayan meh(me)?t => ho(me)? -ho home
 * * yerine herhangi bir ifade gelebilir => ho*e --hote hoke
 * + soldaki ifadenin aynısı olmalı hom+ => homm
 */

app.get("/h(om)*e", (req, res)=>{
    res.send("Merhaba Routing");
});

app.get("/contact", (req, res)=>{
    res.send("Contact page");
});
app.post("/contact", (req, res)=>{
    res.send("Contact page post method");
});

// all metodu ile hem get hem post isteklerini alabiliriz
app.all("/deneme", (req,res)=>{
    res.send("Selam burası app.all")
})

// url de girilen :id ve postid parametresini json şeklinde yazdırdık. 
// Sondaki soru işareti postid parametresinin zorunlu olmadığını gösteriyor
app.get("/users/:id/:postid?", (req,res)=>{
    res.send(req.params);
    res.end();
})


// app.listen(3000);
app.listen(3000, ()=>{
    console.log("Express çalıştı");
});