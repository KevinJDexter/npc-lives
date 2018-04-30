const router = require('express').Router();
const Comments = require('../models/comment.schema');

// Gets all comments from database.
// Separates all comments based on their respective Post, and returns that array
router.get('/', (req, res) => {
  Comments.find({})
    .then((response) => {
      let toSend = {};
      response.forEach(comment => {
        let target_post = comment.target_post;
        if (toSend[target_post] == undefined) {
          toSend[target_post] = [];
        }
        toSend[target_post].push(comment);
      });
      // console.log(toSend);
      res.send(toSend);
    })
    .catch((error) => {
      console.log(`error in /comments GET: ${error}`);
      res.sendStatus(500);
    })
})

// Adds a new comment to the database
router.post('/', (req, res) => {
  Comments.create(req.body)
    .then(() => {
      // console.log(`added ${req.body} to database`);
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log(`error in /comments POST: ${error}`);
      res.sendStatus(500);
    })
})

// Updates existing comment in database
router.put('/', (req, res) => {
  Comments.findByIdAndUpdate(req.body._id, req.body)
    .then(() => { 
      // console.log(`udated object with id ${req.body._id} to ${req.body}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`error in /comments PUT: ${error}`);
      res.sendStatus(500);
    })
})

// Deletes existing comment in database
router.delete('/', (req, res) => {
  Comments.findByIdAndRemove(req.query._id)
    .then(() => {
      // console.log(`deleted object with id ${req.body._id}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`error in /comments DELETE: ${error}`);
      res.sendStatus(500);
    })
})

module.exports = router;