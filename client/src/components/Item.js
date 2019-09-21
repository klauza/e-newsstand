import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToBasket } from '../actions/basketActions';
import { Link } from 'react-router-dom';
import Contact_Delivery from './Contact_Delivery';
import Loader from '../layout/Loader';
import { Wrapper, BackButton, Button } from '../layout/StyledComponents';
import styled from 'styled-components';
import Item_Image_Gallery from './Item_Image_Gallery';


const Item = ({addToBasket, props}) => {

  
  const [theItem, setTheItem] = useState('');

  useEffect(()=> {

    fetch(`/api/shop/item/${props.match.params.item}`)
      .then(res => res.json())
      .then(data => setTheItem(data.result[0]) )

  //eslint-disable-next-line
  }, [])

  const throwToBasket = (item) => {
    addToBasket(item);
  }

  console.log(theItem);
  if(theItem){
    return (
      <Wrapper>
        <div>
          <BackButton>Back</BackButton>
          <div>keywords: {theItem.slugs.map((slug, id) => <Link to={`/shop/search?query=${slug}`} key={id}><span>{slug}</span></Link> )}</div>
          <h2>{theItem.longName}</h2>

          <Item_Image_Gallery images={theItem.imgs} />
          
          <button onClick={()=>throwToBasket(theItem)}>add to basket</button>
        </div>

        <Contact_Delivery />
      </Wrapper>
    )

  } else{

    if(theItem === undefined){ {/* Item is not in database */}
      return( <Wrapper> <Link to="/shop"><Button>Back to shop</Button></Link> <h3 style={{textAlign: "center"}}>Item not found</h3> </Wrapper> )

    } else{ {/* Item is fetching */}
      return( <Loader/>  )
    }
  }
 
}


const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  basket: state.basket
})
export default connect(mapStateToProps, {addToBasket})(Item)
