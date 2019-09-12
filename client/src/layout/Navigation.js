import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </div>
  )
}

export default Navigation
