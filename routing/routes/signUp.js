const express = require("express");
const router = express.Router();

router.get("/signUp", (req, res) => {
    res.send("SignUp sayfası");
})

router.post("/signUp", (req, res) => {
    res.send("SignUp sayfası post metodu");
})

module.exports = router;