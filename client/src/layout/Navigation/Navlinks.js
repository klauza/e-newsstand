import React from 'react';
import { NavLink } from 'react-router-dom';


const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink exact activeClassName="active" to="/" className="link">Home</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/shop" className="link">Shop</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/about" className="link">About</NavLink>
      </li>
    </ul>
  )
}

export default Navlinks
