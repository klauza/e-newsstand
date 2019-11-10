const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const config = require('config');      // for accessing to global variables
const secretString = config.get('APIKEY');     // access to global variable
// bringing json web token
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');


// SCHEMA
const Admin = require('../Schema/Admin');

// @route   POST /api/admin/login
// @desc    Register a new admin
router.post('/', async (req, res) => {
  const { name, email, password, secret} = req.body;

  try{
    if(secret !== secretString){  // check for secretString
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
      admin: { 
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


// @route   PUT /api/admin/login/:id
// @desc    Update admin
router.put('/:id', auth, async (req, res) => {
  const { email, password, oldPwd } = req.body;

  const updFields = {}; // empty obj as init
  if(email) updFields.email = email;
  if(password) updFields.password = password;

  try{
    let admin = await Admin.findById(req.params.id);  // find user by ID

    if(!admin) return res.status(404).json({ msg: 'ID of this Admin could not be found' });

    // "please put your previous password" - > password is needed to make any update of the admin!!!!!!!!!!
    const isMatch = await bcrypt.compare(oldPwd, admin.password);
    if(!isMatch){
      return res.status(400).json({ msg: 'Invalid Credentials'});
    }
  

    // process the update
    admin = await Admin.findByIdAndUpdate(
      req.params.id,
      { $set: updFields },
      { new: true }
    );

    
    // enctrypting the password
    const salt = await bcrypt.genSalt(10);
    // hashing the password
    admin.password = await bcrypt.hash(password, salt);

    await admin.save();


    // JWT +++
    // get unique ID of created user created by mongoose 
    const payload = {
      admin: { 
        id: admin.id 
      }
    }

    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 7200 // 3600 = 1h
    }, (err, token) => {
      if(err) throw err;
      res.json({ token });
    })
        
      
    res.json(admin); // send the updated game
    
  } catch(err){
    console.error(err.message);
    res.status(500).send('server error');
  }
});


module.exports = router;