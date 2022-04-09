const router = require("express").Router();
const sequelize = require("../config/connection");
const Charity = require("../models/Charity");
const User = require("../models/User");

router.get("/", async (req, res) => {
  res.render("homepage", {});
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/get-involved", async (req, res) => {
  res.render("getInvolved", {});
});

router.get("/all", async (req, res) => {
  try {
    const charityData = await Charity.findAll();
    const profiles = charityData.map((profile) => profile.get({ plain: true }));
    res.render("charitypage", { profiles });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});



router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
