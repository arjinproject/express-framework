const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    const user = false;
    if (user)
        res.send("Profile sayfası");
    else
        return next({ status: 404, message: "Bu" });
});

module.exports = router;