import React, {useRef, useEffect, useState} from 'react';
import PopulateWithData from './PopulateWithData';
import Loader from '../../layout/Loader';
import {Link} from 'react-router-dom';
import { Wrapper, Button, SearchForm } from '../../layout/StyledComponents';
import styled from 'styled-components';

const SearchHeader = styled.div`
  border: 1px solid black;
`;
const Category = styled.h3`
  text-align: center;
  margin: 20px 0;
`;


const Search = (props) => {

  const inputRef = useRef();
  const { location } = props;
  const params = getParams(location);
  const [query, setQuery] = useState("");
  const [shopData, setShopData] = useState([]);
  const [allData, setAllData] = useState([]); 
  const [isFetching, setIsFetching] = useState(true);



  useEffect(()=> {
    setQuery(params.query); // set the query on page load
    // console.log("Location: ",location);
    // console.log("Params: ",params); // query params on page load

    

    const initPage = () => {
    
      fetch(`/api/shop/search?cat=${params.cat}&query=${params.query}`)
      .then(res => res.json())
      .then(data => {
        try{
          if(params.query !== ""){
            setShopData(data.result);
            setAllData(data.result);

          } else{
            setShopData(data.result.items);
            setAllData(data.result.items);
            
          }
        }catch(err){}

        setIsFetching(false);
        try{
          inputRef.current.value = params.query;
        } catch(err){}
      })
     
       

    }
    initPage();

  // eslint-disable-next-line
  }, [location])


  
  // console.log(query); // query test, in useEffect not seen


  function getParams(location) {
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get('query') || '',
      cat: searchParams.get('cat') || ''
    };
  }
  function setParams() {
    const searchParams = new URLSearchParams();
    searchParams.set("query", query);
    return searchParams.toString().toLowerCase();
  }


  const updateURL = () => {
    const url = setParams();

    props.history.push(`?cat=${params.cat}&${url}`);
  };

  const clearURL = () => {
    props.history.push(`?cat=${params.cat}`);
  }




  const handleChange = (e) => {
    setQuery(e.target.value.trim());
  }


  const handleSearch = (e) => {
    setIsFetching(true);
    e.preventDefault();
    // console.log(query);
    if(params.cat === "" && inputRef.current.value === ""){
      console.log('ALERT, field cannot be empty!');
      setIsFetching(false);
    } else{

      let q = inputRef.current.value.trim();

      if(q === ''){
        setShopData(allData);
        clearURL();
        
      } else{
        updateURL();
      }
      
      setIsFetching(false);
 
    }

    
  }


  return (
    <Wrapper>

      <SearchHeader>
        <Link to="/shop"><Button>Back to all categories</Button></Link>
        <Category> Category: {params.cat !== "" ? (params.cat.toUpperCase()) : ("All")} </Category>

        <SearchForm onSubmit={handleSearch}>
          <input
            className="main-input"
            type="text"
            onChange={handleChange}
            ref={inputRef}
            autoComplete="off" 
            required={`${params.cat}` === "" ? (true) : (false)}
          />
          <i className="fa fa-search"></i>
          <label htmlFor="name" className="label-name">
            <span className="content-name"></span>
          </label>
          <input type="submit" value="Submit" />
        </SearchForm>

      </SearchHeader>

      {isFetching ? ( <Loader /> ) : 
      (
        (shopData && shopData.length > 0) ? (
        <PopulateWithData shopData={shopData} />
        ) : 
        (
          <div>No item was found</div>
        ) 
      )}

    </Wrapper>
  )
  
}

export default Search
