import React from 'react';
import { Link } from 'react-router-dom';

const PopulateWithData = ({shopData}) => {

  // console.log(shopData);
  return (
    <div>
      {shopData.map(item => <li key={item.id}><Link to={{ pathname: `/shop/item/${item.id}`}}>{item.name}</Link></li>)}
    </div>
  )
}

export default PopulateWithData
