import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToBasket } from '../actions/basketActions';
import { setAlert } from '../actions/alertActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactDelivery from './ContactDelivery';
import Loader from '../layout/Loader';
import { Wrapper, BackButton, Button } from '../layout/StyledComponents';
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

  const [quantity, setQuantity] = useState("1");
  const [theItem, setTheItem] = useState('');

  useEffect(()=> {

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
          <Keywords>keywords in All categories: {theItem.slugs.map((slug, id) => <span><Link to={`/shop/search?query=${slug}`} key={id}><span>{slug}</span></Link>,</span> )}</Keywords>
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
      return( null  )
    }
  }
 
}


const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  basket: state.basket
})
export default connect(mapStateToProps, {addToBasket, setAlert})(Item)
