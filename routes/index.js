var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const api = [
    {id: 1}
  ];
  res.json(api);
});

module.exports = router;
