import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToBasket } from '../../actions/basketActions';
import { setAlert } from '../../actions/alertActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactDelivery from '../Contact/ContactDelivery';
// import Loader from '../../layout/Loader';
import { Wrapper, BackButton, Button } from '../../layout/StyledComponents';
import ItemImageGallery from './ItemImageGallery';
import ItemDescription from './ItemDescription';
import ItemBuySection from './ItemBuySection';

const Keywords = styled.div`
  margin: 10px 0; padding: 10px;
  background: yellowgreen;
  height: 100px;
  a{
    margin: 0 0 0 3px;
  }
`;




const Item = ({addToBasket, setAlert, props}) => {

  const [quantity, setQuantity] = useState(1);
  const [theItem, setTheItem] = useState(null);

  useEffect(()=> {
    setTimeout(()=>{
      window.scrollTo({ top: 60, left: 0, behavior: 'auto' })
    }, 150);
    
    fetch(`/api/shop/item/${props.match.params.item}`)
      .then(res => res.json())
      .then(data => setTheItem(data.result[0]) )
      
 

  //eslint-disable-next-line
  }, [])

  console.log(theItem);

  const handleQuantity = (qty) => {
    setQuantity(qty);
  }

  const throwToBasket = () => {
    if(theItem && theItem.inStock > 0){
      addToBasket(theItem);
      setAlert("Item added to basket", "green");
    } else{
      alert("item not in stock");
    }
  }

  if(theItem){
    return (
      <Wrapper>
        <div>
          <BackButton>Back</BackButton>
          <Keywords>keywords in All categories: {theItem.slugs.map((slug, id) => <span key={id}><Link to={`/shop/search?query=${slug}`}><span>{slug}</span></Link>,</span> )}</Keywords>
          <h2>{theItem.longName}</h2>

          <ItemImageGallery images={theItem.imgs} />

          <ItemBuySection inStock={theItem.inStock} price={theItem.price} throwToBasket={throwToBasket} handleQuantity={handleQuantity} />

          <ItemDescription longDesc={theItem.longDesc} />
          
        </div>

        <ContactDelivery />
      </Wrapper>
    )

  } else{

    if(theItem === undefined){    //Item is not in database 
      return( <Wrapper> <Link to="/shop"><Button>Back to shop</Button></Link> <h3 style={{textAlign: "center"}}>Item not found</h3> </Wrapper> )

    } else{     //Item is fetching 
      return( <Wrapper>fetchin</Wrapper>  )
    }
  }
 
}
Item.propTypes = {
  addToBasket: PropTypes.func,
  setAlert: PropTypes.func,
  quantity: PropTypes.number,
  theItem: PropTypes.object
}
ItemImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
}
ItemBuySection.propTypes = {
  inStock: PropTypes.number,
  price: PropTypes.number,
  throwToBasket: PropTypes.func,
  handleQuantity: PropTypes.func
}
ItemDescription.propTypes = {
  longDesc: PropTypes.string
}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  basket: state.basket
})
export default connect(mapStateToProps, {addToBasket, setAlert})(Item)
