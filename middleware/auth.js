const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){    // next - move on to the next middleware
  // get token from the header
  const token = req.header('x-auth-token');

  // chceck if token doesnt exist
  if(!token){
    return res.status(401).json({ msg: 'No token, authorization denied' }); // 401 - unauthorised
  }

  // if there is a token, we need to verify it 
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret')); // we pass a token. This also takes a 'secret'
    // at this moment, the payload is going to be put in decoded variable

    req.admin = decoded.admin; // we need to get the admin out, so we now have an access to this inside the route
    next();

  } catch (err) { 
    res.status(401).json({ msg: 'Token is not valid' });
  }
}