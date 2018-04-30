const router = require('express').Router();
const PostSchema = require('../models/post.schema');

router.get('/', (req, res) => {
  PostSchema.find({})
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((error) => {
      console.log(`error in /post GET: ${error}`);
      res.sendStatus(500);
    })
})

module.exports = router;