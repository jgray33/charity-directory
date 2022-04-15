const router = require("express").Router();
const sequelize = require("../config/connection");
const { Category } = require("../models");
const Charity = require("../models/Charity");
const User = require("../models/User");
const Post = require("../models/Post")

=======
const withAuth = require("../utils/auth")


// Homepage
router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});

router.get("/newsfeed", async (req, res) => {
try {
  const newsfeedData = await Post.findAll({
    include:[ {model: User }]
  })
  const posts = newsfeedData.map((post) => post.get({plain:true}))
  res.render("newsfeed", {posts})
  console.log(posts)
} catch (err) {
  res.status(500).json(err)
  console.log(err)
}
});

// Login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Signup page
router.get("/get-involved", withAuth, async (req, res) => {
  res.render("getInvolved", {});
});

router.get("/signup", (req, res) => {
  res.render("signup");
});


// Dashboard - render all the user's posts
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {user_id: req.session.user_id},
    })
    const posts = postData.map((post) => post.get({plain: true}))
    res.render("dashboard", {
      posts
    });
}
catch (err){
  console.log(err)
}
});

// Newsfeed - render all the posts 
router.get("/newsfeed", withAuth, async (req, res) => {
try {
  const newsfeedData = await Post.findAll({
    include:[ {model: User }]
  })
  const posts = newsfeedData.map((post) => post.get({plain:true}))
  res.render("newsfeed", {posts})
  console.log(posts)
} catch (err) {
  res.status(500).json(err)
  console.log(err)
}
});


// Render all the charities on the charities page
router.get("/all", withAuth, async (req, res) => {
  try {
    const charityData = await Charity.findAll();
    const profiles = charityData.map((profile) => profile.get({ plain: true }));
    res.render("charitypage", { profiles });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Search by category
router.get("/category/:category_name", withAuth, async (req, res) => {
    console.log("getting to route")
      try {
    const charityData = await Category.findAll({
      where: { category_name: req.params.category_name },
      include: [
        { model: Charity},
      ]
    });
    // res.status(200).json(charityData)
    console.log(charityData[0].charities[0].charity_name)

    if (!charityData) {
      console.log("Not working")
      res.status(404).json({ message: "no matches" });
      return;
    }
        const profiles = charityData.map((profile) => profile.get({ plain: true }));
    res.render("charity-search", { profiles });

  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Search by charity name
router.get("/search/:charity_name", withAuth, async (req, res) => {
  console.log("Getting to route");
  try {
    const charityData = await Charity.findOne({
      where: { charity_name: req.params.charity_name },
    });
    if (!charityData) {
      res.status(404).json({ message: "no charity under that name" });
      return;
    }

    const pageData = await charityData.get({ plain: true });
    console.log("Going to render");
    res.render("charity-search", {
      ...pageData,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


router.get("/test", (req, res) => {
  res.render("test");
});

module.exports = router;
