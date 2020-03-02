const express = require("express");
const app = express();
const signIn = require("./routes/signIn");
const signUp = require("./routes/signUp");
const users = require("./routes/users");



// middleware: arakatman req - middleware - res
app.use((req,res,next)=>{
    const isLogin = false;
    if (isLogin) {
        next();
    } else {
        res.send("Lütfen giriş yapın");
    }
});
// middleware: arakatman

app.use("/", signIn);
app.use("/user", signUp);
app.use("/profile", users);

// app.listen(3000);
app.listen(3000, ()=>{
    console.log("Express çalıştı");
});