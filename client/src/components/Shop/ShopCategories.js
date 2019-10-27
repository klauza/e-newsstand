import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPageLocation } from '../../actions/miscActions';
import { setAlert } from '../../actions/alertActions';

import history from '../../history';

import styled from 'styled-components';
import { Wrapper, SearchForm } from '../../layout/StyledComponents';
import { newspapersImage, lettersImage, gadgetsImage } from '../../media/index';


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


const Shop = ({setPageLocation, misc: {pageLocation}, setAlert}) => {
  const inputRef = useRef();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query !== ""){
      history.push(`/shop/search?query=${query}`)
    } else {
      setAlert("Field cannot be empty!", "warning", 2000);
    }
  }
  const handleChange = () => {
    setQuery(inputRef.current.value.trim());
  }
  
  return (
    <Wrapper>

    <Title>Search whatever you like</Title>

    <SearchForm onSubmit={handleSubmit}>
      <input
        className="main-input"
        type="text"
        onChange={handleChange}
        ref={inputRef}
        autoComplete="off" 
      />
      <i className="fa fa-search"></i>

      
      <input type="submit" value="Submit" />
    </SearchForm>

      <Title>Or pick a category</Title>

      <Categories>
        <Link to='shop/search?cat=newspapers'><CategoryBox image={newspapersImage} onClick={()=> setPageLocation({...pageLocation, shop: 0})}><h2>Newspapers</h2></CategoryBox></Link>
        <Link to='shop/search?cat=letters'><CategoryBox image={lettersImage} onClick={()=> setPageLocation({...pageLocation, shop: 0})}><h2>Letters</h2></CategoryBox></Link>
        <Link to='shop/search?cat=gadgets'><CategoryBox image={gadgetsImage} onClick={()=> setPageLocation({...pageLocation, shop: 0})}><h2>Gadgets</h2></CategoryBox></Link>
      </Categories>

    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  misc: state.misc
})
export default connect(mapStateToProps, {setPageLocation, setAlert})(Shop)
