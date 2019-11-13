const express = require('express');
const router = express.Router();
const User = require('../schemas/user');

/* GET users listing. */
// Get /users
router.get('/', (req, res, next) => {
    User.find({})
    .then((users) => {
        res.json(users);
    })
    .catch((err) => {
        console.error(err);
        next(err);
    })
});

// POST /users
router.post('/', (req, res, next) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married
    });
    user.save()
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch((err) => {
        console.error(err);
        next(err);
    });
});

module.exports = router;
