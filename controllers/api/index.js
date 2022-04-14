const router = require('express').Router();

const userRoutes = require('./userRoutes');
const charityRoutes = require("./charityRoutes")
const postRoutes = require("./postRoutes")

router.use('/users', userRoutes);
router.use("/charity", charityRoutes);
router.use("/post", postRoutes);

module.exports = router;