const router = require("express").Router()

router.get("/", async (req,res) => {
    res.send("Here")
})

module.exports = router