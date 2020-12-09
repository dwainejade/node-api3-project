const express = require('express');
const users = require("./userDb")
const posts = require("../posts/postDb")
const { validateUserId, } = require("./usersMiddlewware")

const router = express.Router();

router.post('/', validateUserId(), (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

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
