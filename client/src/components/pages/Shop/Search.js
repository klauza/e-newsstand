import React, {useRef, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Loader from '../../layout/ReusableComponents/Loader';

import { connect } from 'react-redux';
import SearchPopulate from './SearchPopulate';
import { setAlert } from '../../../actions/alertActions';

// CSS
import { Wrapper, Button, SearchForm } from '../../layout/ReusableComponents/StyledComponents';
import styled from 'styled-components';

const SearchHeader = styled.div`
  border: 1px solid black;
`;
const Category = styled.h3`
  text-align: center;
  margin: 20px 0;
`;


const Search = ({props, misc: {pageLocation}, setAlert}) => {

  const inputRef = useRef();
  const { location } = props;
  const params = getParams(location);
  const [query, setQuery] = useState("");
  const [shopData, setShopData] = useState([]);
  const [allData, setAllData] = useState([]); 
  const [isFetching, setIsFetching] = useState(true);


  useEffect(()=> {
    // auto-set the query on page load
    setQuery(params.query); 


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

        }catch(err){
          // backend problems
        }

        setIsFetching(false);
        try{
          inputRef.current.value = params.query;
        } catch(err){
          // dom not loaded yet
        }

      })
      .then(()=>{
        if(pageLocation.shop !== null){
          window.scrollTo({  
            top: pageLocation.shop,
            left: 0,
            behavior: 'auto'
          })
          
        } 
      })

    }
    initPage();

  // eslint-disable-next-line
  }, [location])


  // get query from url
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

  // * * *
  const updateURL = () => {
    const url = setParams();
    props.history.push(`?cat=${params.cat}&${url}`);
  };
  const clearURL = () => {
    props.history.push(`?cat=${params.cat}`);
  }

  // * * *
  const handleChange = (e) => {
    setQuery(e.target.value.trim());
  }

  const handleSearch = (e) => {
    setIsFetching(true);
    e.preventDefault();
    
    if(params.cat === "" && inputRef.current.value === ""){
      setAlert("Field cannot be empty!", "warning", 2000);
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
      <Link to="/shop"><Button><i className="fa fa-angle-double-left"></i></Button></Link>
      <SearchForm onSubmit={handleSearch}>
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
      
      <SearchHeader>
        
        <Category> Category: {params.cat !== "" ? (params.cat.toUpperCase()) : ("All")} </Category>


      </SearchHeader>

      {isFetching ? ( <Loader /> ) : 
      (
        (shopData && shopData.length > 0) ? (
        <SearchPopulate shopData={shopData} />
        ) : 
        (
          <div>No item was found</div>
        ) 
      )}

    </Wrapper>
  )
  
}
const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  misc: state.misc
})
export default connect(mapStateToProps, {setAlert})(Search)
