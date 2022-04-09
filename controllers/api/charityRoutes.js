const router = require("express").Router()
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

router.get("/:charity_name", async (req, res) => {
    try {
      const charityData = await Charity.findOne({
        where: { charity_name: req.params.charity_name },
      });
      
      if (!charityData) {
        res.status(404).json({ message: "no charity under that name" });
        return;
      }
      res.status(200).json(charityData);
      res.render("/getInvolved")
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

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



module.exports = router