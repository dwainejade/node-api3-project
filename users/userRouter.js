const express = require('express');
const users = require("./userDb")
const posts = require("../posts/postDb")
const { validateUserId, validateUser, validatePost} = require("./usersMiddlewware")

const router = express.Router();

// CREATE USER
router.post('/', validateUser(), (req, res) => {
  users.insert(req.body)
    .then((user) =>{
      res.status(201).json(user)
    })
    .catch((error)=>{
      next(error)
    })
});

// CREATE POST
router.post('/:id/posts', (req, res) => {

});

// GET ALL USERS
router.get('/', (req, res) => {
  const options = {
    sortBy: req.query.sortBy,
    limit: req.query.limit
  }

  users.get(options)
    .then((users) => {
      res.status(200).json(users)

    })
    .catch((error) => {
      next(error)
    })
});

// GET USER BY ID
router.get('/:id', validateUserId(), (req, res) => {
  res.status(200).json(req.user)
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware



module.exports = router;
