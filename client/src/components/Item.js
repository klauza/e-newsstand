import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <Fragment>
      {theItem && 
      <div>
        <div>Slugs: {theItem.slugs.map((slug, id) => <Link to={`/shop/search?query=${slug}`} key={id}><span>{slug}</span></Link> )}</div>
        {theItem.name}
      </div>
      }
    </Fragment>
  )
}

export default Item
