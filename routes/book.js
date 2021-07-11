const router = require('express').Router();

const listBooks = require('../controllers/book/list');
const createBook = require('../controllers/book/create');

router.get('/', listBooks.all);
router.get('/:id', listBooks.one);
router.post('/', createBook);

module.exports = router;
