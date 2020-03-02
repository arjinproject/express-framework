const express = require("express");
const app = express();
const signIn = require("./routes/signIn");
const signUp = require("./routes/signUp");

app.use("/", signIn);
app.use("/user", signUp);



// app.listen(3000);
app.listen(3000, ()=>{
    console.log("Express çalıştı");
});