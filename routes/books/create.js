const STATIC_BOOK_DATA = require('./constants');

module.exports = (req, res) => {
  const id = Math.max(...STATIC_BOOK_DATA.map(book => book.id)) + 1;
  STATIC_BOOK_DATA.push({ id, ...req.body });
  res.send('New book added successfully');
};
