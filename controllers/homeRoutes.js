const router = require("express").Router()
const sequelize = require('../config/connection');
const Charity = require("../models/Charity");
const User = require("../models/User");

router.get("/", async (req,res) => {
   res.render ('homepage', {
     
   })
})

router.get("/login", async (req,res) => {
   res.render ('login', {
     
   })
})

router.get("/get-involved", async (req,res) => {
  res.render ('getInvolved', {
    
  })
})

router.get("/charity", async (req,res) => {
  try{
      const charityData = await Charity.findAll()
      const profiles = charityData.map((profile) => profile.get({plain:true}))
              res.render("charitypage", {profiles})
          } catch (err) {
      res.status(500).json(err)
      console.log(err)
  }
})


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


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'content', 'title', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const post = dbPostData.get({ plain: true });
      res.render('single-post', {
        post,
        logged_in: req.session.logged_in,
        username: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/posts-comments', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'content', 'title', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const post = dbPostData.get({ plain: true });

      res.render('posts-comments', {
        post,
        logged_in: req.session.logged_in,
        username: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
