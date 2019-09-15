import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PopulateWithData = ({shopData}) => {

  console.log(shopData);

 if(shopData.length > 0){
    return ( 
      <Fragment>
      
      {
        (
        <div>
          {shopData.map(item => <li key={item.id}><Link to={{ pathname: `/shop/item/${item.id}`}}>{item.name}</Link></li>)}
        </div>
        ) 
      }

    </Fragment>)
  } else{
    return (  <div>Nothing was found</div> )
  }
}

export default PopulateWithData
