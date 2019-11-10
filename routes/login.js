const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const config = require('config');      // for accessing to global variables
const secretString = config.get('APIKEY');     // access to global variable

// bringing json web token
const jwt = require('jsonwebtoken');

// SCHEMA
const Admin = require('../Schema/Admin');

// @route   POST /api/admin/login
// @desc    Register a new admin

router.post('/', async (req, res) => {

  // check for secretString
  // const { name, nameSlug, email, password, avatar, highscore, quote} = req.body;
  const { name, email, password, secret} = req.body;

  try{
    if(secret !== secretString){ 
      return res.status(400).json({ msg: 'Secret string not correct'})
    }

    // create new admin
    admin = new Admin({
      name: name,
      email: email,
      password: password
    })

    // enctrypting the password
    const salt = await bcrypt.genSalt(10);
    // hashing the password
    admin.password = await bcrypt.hash(password, salt);

    await admin.save();


    // JWT +++
    // get unique ID of created user created by mongoose 
    const payload = {
      user: { 
        id: admin.id 
      }
    }

    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 7200 // 3600 = 1h
    }, (err, token) => {
      if(err) throw err;
      res.json({ token });
    })

  }catch(err){
    console.error(err.message);
    res.status(500).send('server error');
  }
})

module.exports = router;