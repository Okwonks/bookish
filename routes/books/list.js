const STATIC_BOOK_DATA = require('./constants');

module.exports = { one, all };

function all (req, res) {
  res.send(STATIC_BOOK_DATA);
}

function one(req, res) {
  const bookId = req.params.id;
  res.send(STATIC_BOOK_DATA.find(book => book.id === parseInt(bookId)));
}
