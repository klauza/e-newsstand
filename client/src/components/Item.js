import React, { useEffect, useState } from 'react'

const Item = (props) => {

  // console.log(props.match.params.item);
  const [theItem, setTheItem] = useState('');

  useEffect(()=> {


    fetch(`/api/shop/item/${props.match.params.item}`)
      .then(res => res.json())
      .then(data => setTheItem(data.results))

  //eslint-disable-next-line
  }, [])

  console.log(theItem);

  return (
    <div>
      item
    </div>
  )
}

export default Item
