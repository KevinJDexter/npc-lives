const router = require('express').Router();
const Post = require('../models/post.schema');

// Gets all Posts in database and sends to client
router.get('/', (req, res) => {
  Post.find({})
    .then((response) => {
      // console.log(response);
      res.send(response);
    })
    .catch((error) => {
      console.log(`error in /post GET: ${error}`);
      res.sendStatus(500);
    })
})

// Adds new Post to the database
router.post('/', (req, res) => {
  Post.create(req.body)
    .then(() => {
      // console.log(`Posted to 'posts': ${req.body}`);
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log(`error in /post POST: ${error}`);
      res.sendStatus(500);
    })
})

// Updates existing post in database
router.put('/', (req, res) => {
  Post.findByIdAndUpdate(req.body._id, req.body)
    .then(() => {
      // console.log(`updated object with id ${req.body._id} to ${req.body}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`error in /post PUT: ${error}`);
      res.sendStatus(500);
    })
})

// Deletes existing post in database
router.delete('/', (req, res) => {
  Post.findByIdAndRemove(req.query._id)
    .then(() => {
      // console.log(`deleted object with id ${req.body._id}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`error in /post DELETE: ${error}`);
      res.sendStatus(500);
    })
})

module.exports = router;