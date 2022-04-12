const router = require('express').Router();

const userRoutes = require('./userRoutes');
const charityRoutes = require("./charityRoutes")

router.use('/users', userRoutes);
router.use("/charity", charityRoutes )

module.exports = router;