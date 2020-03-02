const express = require("express");
const router = express.Router();

router.get("/signIn", (req, res) => {
    res.send("SignIn sayfası");
})

router.post("/signIn", (req, res) => {
    res.send("SignIn sayfası post metodu");
})

module.exports = router;