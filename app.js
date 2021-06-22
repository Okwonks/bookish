const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');

const app = express();

const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books/');

const PORT = process.env.PORT || 1500;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/books', booksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'Not found'));
});

// error handler
app.use(function(err, req, res, next) { // eslint-disable-line no-unused-vars
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send(err.message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
