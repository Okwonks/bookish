const express = require('express');
const router = express.Router();

const index = require('../controllers/index');
const user = require('./user');
const book = require('./book');

router.use('/', index);
router.use('/user', user);
router.use('/book', book);

module.exports = router;
