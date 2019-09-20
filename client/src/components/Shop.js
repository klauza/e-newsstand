import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import history from '../history';
import { Wrapper } from '../layout/StyledComponents';


const Title = styled.h2`
  text-align: center;
  margin: 20px auto;
`;
const Categories = styled.div`
  margin-bottom: 50px;
  display: grid; grid-template-columns: repeat(auto-fit, minmax(auto, 200px)); 
  grid-gap: 5px;
  justify-content: center;

  a{ text-decoration: none; }

`;
const CategoryBox = styled.div`
  border: 2px solid black;
  width: 200px; height: 100px;
  background: lightseagreen;
  color: white;
  &:hover{
    background: grey;
  }
  @media(max-width: 768px){
    width: 100%;
  }
`;

const Form = styled.form`
  text-align: center;
`;




const Shop = () => {
  const inputRef = useRef();
  const [query, setQuery] = useState("");


  useEffect(()=> {

    
  //eslint-disable-next-line
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault();
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

    <Wrapper>
      <Title>Pick a category</Title>

      <Categories>
        <Link to='shop/search?cat=newspapers'><CategoryBox><span>Newspapers</span></CategoryBox></Link>
        <Link to='shop/search?cat=letters'><CategoryBox>Letters</CategoryBox></Link>
        <Link to='shop/search?cat=gadgets'><CategoryBox>Gadgets</CategoryBox></Link>
      </Categories>

      <Title>Or search whatever you like</Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for..."
          onChange={handleChange}
          ref={inputRef}
        />
        <input type="submit" value="Submit" />
      </Form>

    </Wrapper>

  )
  
}

export default Shop
