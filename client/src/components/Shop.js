import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const Shop = (props) => {

  const [shopData, setShopData] = useState([]);
  const [allData, setAllData] = useState([]); 
  const [query, setQuery] = useState('');

  useEffect(()=> {

    // const values = queryString.parse(props.location.search)
    // console.log(values);

    fetch('/api/shop')
      .then(res => res.json())
      .then(data => {
        setShopData(data.results);
        setAllData(data.results);
      })

  //eslint-disable-next-line
  }, [])




  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = allData.filter((item) => {
      let found = item.name.includes(query);
      return found;
    })
    if(query === ''){
      setShopData(allData);
    } else{
      setShopData(results);
    }
  }

 
    return (
      <div>
        {shopData.map(item => <li key={item.id}><Link to={{ pathname: `/shop/item/${item.id}`}}>{item.name}</Link></li>)}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for..."
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  
}

export default Shop
