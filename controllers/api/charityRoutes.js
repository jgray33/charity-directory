const router = require("express").Router()
const { route } = require("express/lib/application")
const Charity = require("../../models/Charity")

router.post("/", async (req,res) => {
    console.log("at the route")
    console.log(req.body)
    try {
        const charityData = await Charity.create({
            charity_name: req.body.charName,
            address: req.body.addr,
            telephone_number: req.body.number,
            facebook: req.body.fb,
            opening_hours: req.body.hours
        })
        res.status(200).json(charityData)
        console.log("added to database")
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})

router.put("/:charity")





module.exports = router