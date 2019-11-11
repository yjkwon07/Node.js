const express = require('express');
const router = express.Router();
const { User } = require('../models');

/**
 * Get Home page
 */
// select users
router.get('/', (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.render('sequelize', { title:`Sequlize practice`, users });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;