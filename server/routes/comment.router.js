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

router.post('/', (req, res) => {
  Comments.create(req.body)
    .then(() => {
      console.log(`added ${req.body} to database`);
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log(`error in /comments POST: ${error}`);
      res.sendStatus(500);
    })
})

router.put('/', (req, res) => {
  Comments.findByIdAndUpdate(req.body._id, req.body)
    .then(() => { 
      console.log(`udated object with id ${req.body._id} to ${req.body}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`error in /comments PUT: ${error}`);
      res.sendStatus(500);
    })
})

router.delete('/', (req, res) => {
  Comments.findByIdAndRemove(req.query._id)
    .then(() => {
      console.log(`deleted object with id ${req.body._id}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`error in /comments DELETE: ${error}`);
      res.sendStatus(500);
    })
})

module.exports = router;