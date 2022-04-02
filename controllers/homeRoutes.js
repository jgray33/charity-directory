const router = require("express").Router()

router.get("/", async (req,res) => {
    console.log("Here")
})

module.exports = router