import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import history from '../../history';


const Navlinks = () => {

  const [navQuery, setNavQuery] = useState("");

  const submitNavSearch = (e) => {
    e.preventDefault();
    console.log('form submit');
    history.push(`/shop/search?query=${navQuery}`);
  }
  const handleNavInputChange = (e) => {
    setNavQuery(e.target.value.trim());
  }

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
      <li>
        <NavLink exact activeClassName="active" to="/basket" className="link">Basket <i className="fa fa-shopping-basket"></i></NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/contact" className="link">Contact</NavLink>
      </li>
      <li>
        <form onSubmit={submitNavSearch}>
          <input type="text" placeholder="search in shop..." onChange={handleNavInputChange} />
        </form>
      </li>
    </ul>
  )
}

export default Navlinks
