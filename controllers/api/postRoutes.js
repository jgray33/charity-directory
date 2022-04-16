const router = require("express").Router()
const Post = require("../../models/Post");

router.get("/", async (req, res) => {
    console.log("got to the route")
    try {
      const postData = await Post.findAll()
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post("/", async (req,res) => {
    console.log("at the post route")
       try {
        const postData = await Post.create({
            post_title: req.body.postTitle,
            post_contents: req.body.postContents,
            user_id: req.session.user_id
        })
        res.status(200).json(postData)
        console.log("added to database")
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})

router.delete('/:id', async(req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    })
    if(!postData) {
      console.log("no post with that ID")
    }
    res.status(200).json(postData)
  } catch(err) {
    res.status(500).json(err)
  }})



module.exports = router