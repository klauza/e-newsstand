import React, {useRef, useEffect, useState} from 'react';
import PopulateWithData from './PopulateWithData';
import Loader from '../layout/Loader';

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
    console.log("Location: ",location);
    console.log("Params: ",params); // query params on page load

    

    const initPage = () => {
      fetch(`/api/shop/search?cat=${params.cat}&query=${params.query}`)
      .then(res => res.json())
      .then(data => {
        if(params.query !== ""){
          
          setShopData(data.result);
          setAllData(data.result);
        } else{
          
          setShopData(data.result.items);
          setAllData(data.result.items);
        }
        setIsFetching(false);
        inputRef.current.value = params.query;
        
      })
    }
    initPage();
    
  },[location])

  
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
    return searchParams.toString();
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

  if(isFetching){
    return(
      <Loader />
    )
    
  } else{
  return (
    <div>
      <div><p>THIS IS FIRST/SECOND/THIRD CATEGORY - cat title</p></div>
      <button>Back to categories</button>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for..."
          onChange={handleChange}
          ref={inputRef}
        />
        <input type="submit" value="Submit" />
      </form>


      <div><span>SearchSearchSearch</span></div>

      {shopData && shopData.length > 0 ? (
        <PopulateWithData shopData={shopData} />
      ) : (
        <div>No item was found</div>
      ) }
    </div>
  )
  }
}

export default Search
