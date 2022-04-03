const router = require("express").Router()

router.get("/", async (req,res) => {
   res.render ('charity-results', {
     
   })
})

router.get("/login", async (req,res) => {
   res.render ('login', {
     
   })
})


module.exports = router

