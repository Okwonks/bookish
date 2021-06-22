const express = require('express');
const router = express.Router();

const Package = require('../package.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    name: Package.name,
    version: Package.version,
    description: Package.description,
  });
});

module.exports = router;
