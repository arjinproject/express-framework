// isLogin true olmadan hiçbir sayfa çalışmaz.

const isLogin = (req,res,next)=>{
    const isLogin = false;
    if (isLogin) {
        next();
    } else {
        res.send("Lütfen giriş yapın");
    }
};

module.exports = isLogin;