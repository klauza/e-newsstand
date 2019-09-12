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
router.get('/item/:id', (req, res, next) => {
  const itemId = req.params.id;
  const results = shopItems.find((item) => {
    console.log(item.id, ' ==== ', itemId);
    return item.id == itemId; // return into results if it matches
  })
  
  res.json({
    results: results
  })
})
module.exports = router;