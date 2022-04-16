const router = require("express").Router()
const Charity = require("../../models/Charity")

router.post("/", async (req,res) => {
    console.log("at the route")
    console.log(req.body)
    try {
        const charityData = await Charity.create({
            charity_name: req.body.charName,
            description: req.body.charDesc,
            address: req.body.addr,
            website: req.body.charWebsite,
            telephone_number: req.body.number,
            facebook: req.body.fb,
            opening_hours: req.body.hours,
            donation_page: req.body.charDon
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