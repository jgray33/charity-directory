const router = require("express").Router()

const homeRoutes = require("./homeRoutes")
const apiRoutes = require("./api")
const charityRoutes = require("./charityRoutes")

router.use("/", homeRoutes)
router.use("/api", apiRoutes)
router.use("/charity", charityRoutes)

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router