import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import history from '../history';


const Categories = styled.div`
  display: flex; flex-direction: row;
`;
const CategoryBox = styled.div`
  border: 2px solid black;
  width: 200px; height: 200px;
`;
  




const Shop = () => {
  const inputRef = useRef();
  const [query, setQuery] = useState("");


  useEffect(()=> {

    
  //eslint-disable-next-line
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('query is: ',query);
    if(query !== ""){
      history.push(`/shop/search?query=${query}`)
    } else {
      console.log('ALERT, please put a value into input');
    }
    

  }
  const handleChange = () => {
    setQuery(inputRef.current.value.trim());
  }
    
  return (
    <div>
      <h2>Pick a category</h2>

      <Categories>
        <Link to='shop/search?cat=firstCategory'><CategoryBox>category1</CategoryBox></Link>
        <Link to='shop/search?cat=secondCategory'><CategoryBox>category2</CategoryBox></Link>
        <Link to='shop/search?cat=thirdCategory'><CategoryBox>category3</CategoryBox></Link>
      </Categories>

      <div>Search</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for..."
          onChange={handleChange}
          ref={inputRef}
        />
        
        <input type="submit" value="Submit" />

      </form>

    </div>
  )
  
}

export default Shop
