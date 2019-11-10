const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const config = require('config');
 
const Admin = require('../Schema/Admin');

const auth = require('../middleware/auth');


// @route    GET api/admin/auth
// @desc     Get logged in admin's credentials
// @access   Private
router.get('/', auth, async (req, res) => {
  try{
    const admin = await Admin.findById(req.admin.id).select('-password')
    res.json(admin);
    
  } catch(err){
    console.error(err.message);
    res.status(500).send('server error');
  }
});

// @route    POST api/admin/auth
// @desc     Auth admin & get a token
// @access   Public

router.post('/', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
],
async (req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  const {email, password} = req.body;

  try{
    // check with email if the admin exists
    let admin = await Admin.findOne({ email });
    if(!admin){
      return res.status(400).json({ msg: 'Invalid Credentials'});
    }

    // check if password is correct
    const isMatch = await bcrypt.compare(password, admin.password);
    if(!isMatch){
      return res.status(400).json({ msg: 'Invalid Credentials'});
    }

    const payload = {
      admin: {
        id: admin.id
      }
    }

    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 7200
    }, (err, token) => {
      if(err) throw err;
      res.json({ token });
    })

  } catch(err){
    console.error(err.message);
    res.status(500).send('server error');
  }
  
});

module.exports = router;