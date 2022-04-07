const router = require("express").Router()
const Charity = require("../models/Charity")



router.get("/", async (req,res) => {
    try{
        const charityData = await Charity.findAll()
        const profiles = charityData.map((profile) => profile.get({plain:true}))
                res.render("charitypage", {profiles})
            } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

router.post("/", async (req,res) => {
    try {
        const charityData = await Charity.create({
            id: req.body.id,
            charity_name: req.body.charity_name,
            address: req.body.address, 
            telephone_number: req.body.telephone_number,
            facebook: req.body.facebook,
            opening_hours: req.body.opening_hours
        })
        res.status(200).json(charityData)
    } catch(err) {
        res.status(400).json(err)
    }
})



// // Get all the charities
// router.get("/:id", async(req,res) => {
//     try {
//         const charityData =  await Charity.findByPk(req.params.id)
//         if(!charityData){
//             res.status(404).json({message: "no charity under that name"})
//             return
//         }
//         res.status(200).json(charityData)
//         } catch (err){
//             res.status(500).json(err)
//         }})

router.get("/:charity_name", async(req,res) => {
    try {
        const charityData =  await Charity.findOne({
            where: { charity_name: req.params.charity_name },
        })
        if(!charityData){
            res.status(404).json({message: "no charity under that name"})
            return
        }
        res.status(200).json(charityData)
        } catch (err){
            res.status(500).json(err)
            console.log(err)
        }})

module.exports = router