var express = require('express');
var router = express.Router();

const shopItems = require('../data/shop');

// /shop
// router.get('/', (req, res, next) => {
//   const results = shopItems;


//   res.json( {
//     results: results
//   } );
// });


// shop/item/:id
router.get('/item/:id', (req, res, next) => {


  const itemId = req.params.id;


 const itemWasFound = [];
  console.log('START');
  shopItems.forEach((itemSet) => {
    
    itemSet.items.find((item) => {
      if(item.id == itemId){
        itemWasFound.push(item);
      };
    })
  

  })

  res.json({result: itemWasFound});
  
})



router.get('/search', (req, res, next) => {

  let catSearchTerm = req.query.cat; // category
  if(catSearchTerm == undefined){
      catSearchTerm = "";
  }

  // IF category query is not empty
  if(catSearchTerm != ""){

    // IF 'item query' is empty, return all items from chosen category
    if(req.query.query == "" || req.query.query == undefined){
      const categoryResult = shopItems.find((cat) => {
        return cat.category == catSearchTerm; // return into results if it matches
      })

      res.json({result: categoryResult});

    } else{
      const categoryResult = shopItems.find((cat) => {
        return cat.category == catSearchTerm; // return into results if it matches
      })

      let querySearchTerm = req.query.query;
  
      const queryResult = categoryResult.items.filter((item) => {
        let found = item.name.includes(querySearchTerm) || item.slugs.find(slug => slug === querySearchTerm);
        return found;
      })
      res.json({result: queryResult});
    }
  
  // IF category query is empty
  } else{
    let querySearchTerm = req.query.query;


    let allResults = [];
    shopItems.forEach((itemSet) => {
      itemSet.items.filter((item) => {
        let found = item.longName.toLowerCase().includes(querySearchTerm) || item.name.includes(querySearchTerm) || item.slugs.find(slug => slug === querySearchTerm || slug.includes(querySearchTerm));
        if(found) allResults.push(item)
      })
      
    })

    res.json({result: allResults});
  

  }


})



module.exports = router;