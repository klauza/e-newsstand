var express = require('express');
var router = express.Router();

const shopItems = require('../data/shopItems');

// /shop
router.get('/', (req, res, next) => {
  const results = shopItems;


  res.json( {
    results: results
  } );
});


// shop/item/:id

module.exports = router;