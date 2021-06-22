const express = require('express');
const router = express.Router();

const listBooks = require('./list');
const createBook = require('./create');

router.get('/', listBooks.all);

router.get('/:id', listBooks.one);

router.post('/', createBook);

module.exports = router;
