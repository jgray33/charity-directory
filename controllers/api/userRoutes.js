const router = require("express").Router();
const User = require("../../models/User");

router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.table(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      req.session.charity = true
        .status(201)
        .json({ message: `Successfully created ${userData.username}` });
    });
  } catch (err) {
    res.status(400).json(err);
   
  }
});

router.post("/login", async (req, res) => {
  console.log("login route")
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    console.log(userData + "User data");

    if (!userData) {
      // res.status(400).json({ message: `${userData.username} does not exist` });
      console.log(err);
      res
        .status(400)
        .json({ message: `${req.body.username} is not a valid username` });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      console.log(userData.username + "You are now logged in!")
      res.render("homepage")
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/logout", async (req, res) => {
  try {
    if (req.session.logged_in) {
      const userData = await req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
         }
  } catch {
    res.status(400).end();
  }
});

module.exports = router;
