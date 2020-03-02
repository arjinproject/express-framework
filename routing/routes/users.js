const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Profile sayfası");
})

module.exports = router;