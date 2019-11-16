const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
// SCHEMA
const Colors = require('../Schema/Colors');

// @route    GET api/admin/uicolors
// @desc     Get colors
router.get('/', auth, async (req, res) => {
  try{
    const uicolors = await Colors.find({title: "mr-michael"});  
    res.json(uicolors);
    
  } catch(err){
    console.error(err.message);
    res.status(500).send('server error');
  }
});

// @route PUT /api/admin/uicolors
// @desc update/change ui color schema
router.put('/', auth, async (req, res) => {
  const {mainColor, secondaryColors} = req.body;
  console.log(req.body);
  // Create new object
  const updateColorFields = {
    mainColor: mainColor,
    secondaryColors: secondaryColors
  }; 

  try{
    let newColors = await Colors.find({title: "mr-michael"});  

    if(!newColors) return res.status(404).json({ msg: 'Object not found in database' });

    // process the update
    newColors = await Colors.findOneAndUpdate(
    req.body.title,
    { $set: updateColorFields },
    { new: true });

    res.json(newColors); // send the updated colors object


  }catch(err){
    console.error(err.message);
    res.status(500).send('server error');
  }
})

module.exports = router;