const express = require("express");
const app = express();
const signIn = require("./routes/signIn");
const signUp = require("./routes/signUp");
const users = require("./routes/users");


// helper klasörü altında isLogin.js e taşındı
// // middleware: arakatman req - middleware - res
// app.use((req,res,next)=>{
//     const isLogin = false;
//     if (isLogin) {
//         next();
//     } else {
//         res.send("Lütfen giriş yapın");
//     }
// });
// // middleware: arakatman

// // helpers
// const isLogin = require("./helper/isLogin")
// app.use(isLogin);

app.set("view engine", "pug");

app.use((err, req, res, next) => {
    res.status(err.status);
    res.render('error', {
        message: err.message,
        status: err.status
    });
});

app.use("/", signIn);
app.use("/user", signUp);
app.use("/profile", users);

// app.listen(3000);
app.listen(3000, () => {
    console.log("Express çalıştı");
});