import React, {Fragment, useState} from 'react';
import { NavLink } from 'react-router-dom';
import history from '../../history';
import { logo } from '../../media/index';


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
      <Fragment>
        <li className="link-logo">
          <div><img src={logo} alt=""/></div> <span>E-newsStand</span>
        </li>
        <li className="link-home">
          <NavLink exact activeClassName="active" to="/" className="link">Home</NavLink>
        </li>
        <li className="link-shop">
          <NavLink exact activeClassName="active" to="/shop" className="link">Shop</NavLink>
        </li>
        <li className="link-basket">
          <NavLink exact activeClassName="active" to="/basket" className="link">Basket <i className="fa fa-shopping-basket"></i></NavLink>
        </li>
        <li className="link-contact">
          <NavLink exact activeClassName="active" to="/contact#us" className="link">Contact</NavLink>
        </li>
        <li className="link-search">
          <form onSubmit={submitNavSearch}>
            <input type="text" placeholder="search in shop..." onChange={handleNavInputChange} />
          </form>
        </li>
      </Fragment>
  )
}

export default Navlinks
