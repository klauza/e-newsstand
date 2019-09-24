import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToBasket } from '../actions/basketActions';
import { Link } from 'react-router-dom';
import ContactDelivery from './ContactDelivery';
import Loader from '../layout/Loader';
import { Wrapper, BackButton, Button } from '../layout/StyledComponents';
import ItemImageGallery from './ItemImageGallery';
import ItemDescription from './ItemDescription';
import ItemBuySection from './ItemBuySection';


const Item = ({addToBasket, props}) => {

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
    } else{
      alert("item not in stock");
    }
  }

  if(theItem){
    return (
      <Wrapper>
        <div>
          <BackButton>Back</BackButton>
          <div>keywords: {theItem.slugs.map((slug, id) => <Link to={`/shop/search?query=${slug}`} key={id}><span>{slug}</span></Link> )}</div>
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
      return( <Loader/>  )
    }
  }
 
}


const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  basket: state.basket
})
export default connect(mapStateToProps, {addToBasket})(Item)
