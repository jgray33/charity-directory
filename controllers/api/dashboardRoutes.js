const router = require("express").Router()
const Dashboard = require("../../models/Dashboard")

router.post("/", async (req,res) => {
    console.log("at the route")
    console.log(req.body)
    try {
        const dashboardData = await Charity.create({
            post_: req.body.title,
            post_contents: req.body.contents,
            user_id: req.body.dashBtn
        })
        res.status(200).json(dashboardData)
        console.log("added to database")
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})


module.exports = router