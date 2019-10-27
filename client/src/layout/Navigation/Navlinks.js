import React, {Fragment, useState, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import history from '../../history';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';

// icons
import { logo } from '../../media/index';
import SvgHome from '../../Icons/Home';
import SvgShop from '../../Icons/Shop';
import SvgBasket from '../../Icons/Basket';
import SvgContact from '../../Icons/Contact';
import SvgCancel from '../../Icons/Cancel';


const Navlinks = ({ isDesktop, mobileToggled, mobileNotToggled, hideMobileNav, setAlert }) => {

  const [navQuery, setNavQuery] = useState("");
  const textInput = useRef();

  // Search input located on navbar
  const submitNavSearch = (e) => {
    e.preventDefault();
    if(navQuery === ""){
      setAlert("Field cannot be empty!", "warning", 2000);
    } else{
      history.push(`/shop/search?query=${navQuery}`);
      hideMobileNav();
    }
  }
  const handleNavInputChange = (e) => {
    setNavQuery(e.target.value.trim());
  }
  const clearAndFocusInput = () => {
    setNavQuery("");
    textInput.current.value="";
    textInput.current.focus();
  }

  return (
      <Fragment>

        <li className="link-logo">
          <div><img src={logo} alt=""/></div> <span>E-newsStand</span>
        </li>

        <li className="link-home">
          <NavLink exact activeClassName="active" to="/" className="link" onTouchEnd={hideMobileNav}>
            {mobileNotToggled && (<SvgHome />)}
            {(isDesktop || mobileToggled) && (<Fragment><SvgHome /><div className="link-text">Home</div></Fragment>)}
          </NavLink>
        </li>

        <li className="link-shop">
          <NavLink activeClassName="active" to="/shop" className="link" onTouchEnd={hideMobileNav}>
            {mobileNotToggled && (<Fragment><SvgShop /><div className="link-text">Shop</div></Fragment>)}
            {(isDesktop || mobileToggled) && (<Fragment><SvgShop /><div className="link-text">Shop</div></Fragment>)}
          </NavLink>
        </li>

        <li className="link-basket">
          <NavLink exact activeClassName="active" to="/basket" className="link" onTouchEnd={hideMobileNav}>
            {mobileNotToggled && (<Fragment><SvgBasket /><div className="link-text">Basket</div></Fragment>)}
            {(isDesktop || mobileToggled) && (<Fragment><SvgBasket /><div className="link-text">Basket</div></Fragment>)}
          </NavLink>
        </li>

        <li className="link-contact">
          <NavLink exact activeClassName="active" to={{pathname: "/contact", hash:"#us"}} className="link" onTouchEnd={hideMobileNav}>
            {mobileNotToggled && (<Fragment><SvgContact /><div className="link-text">Contact</div></Fragment>)}
            {(isDesktop || mobileToggled) && (<Fragment><SvgContact /><div className="link-text">Contact</div></Fragment>)}
          </NavLink>
        </li>

        <li className="link-search">
          <form onSubmit={submitNavSearch}>
            <input ref={textInput} type="text" placeholder="search in shop..." onChange={handleNavInputChange} />
            <input type="submit"/>
          </form>
          {isDesktop && (<button className="deleteInputBtn" onClick={clearAndFocusInput}><SvgCancel /></button>)}
        </li>

      </Fragment>
  )
}


export default connect(null, {setAlert})(Navlinks)
