import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import history from '../history';
import { Wrapper } from '../layout/StyledComponents';
import { newspapersImage, lettersImage, gadgetsImage } from '../media/index';


const Title = styled.h2`
  text-align: center;
  margin: 20px auto;
`;
const Categories = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: grid; grid-template-columns: repeat(auto-fit, minmax(auto, 100%)); 
  grid-auto-rows: 200px;
  grid-gap: 5px;
  justify-content: center;

  a{ text-decoration: none; }

`;
const CategoryBox = styled.div`
  border: 2px solid black;
  width: 100%; height: 100%;
  color: white;
  background: url( ${props => props.image} ) no-repeat;
  background-size: cover;
  filter: brightness(0.75);
  transition: filter 200ms ease;
  h2{
    text-align: center;
  }
  &:hover{
    filter: brightness(1);
    transition: filter 200ms ease;
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

    <Title>Search whatever you like</Title>

    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search in all categories..."
        onChange={handleChange}
        ref={inputRef}
      />
      <input type="submit" value="Submit" />
    </Form>


      <Title>Or pick a category</Title>

      <Categories>
        <Link to='shop/search?cat=newspapers'><CategoryBox image={newspapersImage}><h2>Newspapers</h2></CategoryBox></Link>
        <Link to='shop/search?cat=letters'><CategoryBox image={lettersImage}><h2>Letters</h2></CategoryBox></Link>
        <Link to='shop/search?cat=gadgets'><CategoryBox image={gadgetsImage}><h2>Gadgets</h2></CategoryBox></Link>
      </Categories>



    </Wrapper>

  )
  
}

export default Shop
