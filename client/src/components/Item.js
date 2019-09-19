import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, BackButton } from '../layout/StyledComponents';
import Loader from '../layout/Loader';

const Item = (props) => {

  // console.log(props.match.params.item);
  const [theItem, setTheItem] = useState('');

  useEffect(()=> {

    fetch(`/api/shop/item/${props.match.params.item}`)
      .then(res => res.json())
      .then(data => setTheItem(data.result[0]) )

  //eslint-disable-next-line
  }, [])

  console.log(theItem);
  if(theItem){
    return (
      <Wrapper>
        {theItem && 
        <div>
          <BackButton>Back</BackButton>
          <div>Slugs: {theItem.slugs.map((slug, id) => <Link to={`/shop/search?query=${slug}`} key={id}><span>{slug}</span></Link> )}</div>
          {theItem.name}
        </div>
        }
      </Wrapper>
    )
  } else{
    return(
      <Loader/>
    )
  }
 
}

export default Item
