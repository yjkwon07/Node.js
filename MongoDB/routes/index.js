const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.get('/', function (req, res, next) {
  User.find({})
    .then((users) => {
      res.render('mongoose', { users });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;