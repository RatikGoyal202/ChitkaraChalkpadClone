const express = require('express');
const router = express.Router();

const userModel = require('../model/userModel');

router.get('/', (req, res, next) => {
  userModel
    .find()
    .select('username dept')
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/', (req, res, next) => {
  const user = new userModel({
    username: req.body.username,
    password: req.body.password,
    dept: req.body.dept,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Created user successfully',
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
