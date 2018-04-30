const router = require('express').Router();
const Comments = require('../models/comment.schema');

router.get('/', (req, res) => {
  Comments.find({})
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((error) => {
      console.log(`error in /comments GET: ${error}`);
      res.sendStatus(500);
    })
})

module.exports = router;