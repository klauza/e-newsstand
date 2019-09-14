import React, { useRef, useEffect, useState } from 'react';
import PopulateWithData from './PopulateWithData';
// import history from '../history';

// import queryString from 'query-string';



  




const Shop = (props) => {
  // const loc = history;
  const inputRef = useRef();

  const { location } = props;
  const params = getParams(location);

  const [shopData, setShopData] = useState([]);
  const [allData, setAllData] = useState([]); 
  const [query, setQuery] = useState("");





  useEffect(()=> {
    // history.push(`/shop?query=${query}`);
    setQuery(params.query);
    console.log("query: ", query);
    console.log("params: ", params);
    console.log("url location: ",location); 
    // console.log('loc: ', loc);

    inputRef.current.value = params.query;

    const initPage = () => {
      fetch('/api/shop')
      .then(res => res.json())
      .then(data => {
        setShopData(data.results);
        setAllData(data.results);
        populate(data.results);
      })
    }
    initPage();

    const populate = (data) => {
      // console.log('query from populate: ',query);
      if(params.query !== ''){
        // make a fetch and set Data based on query
        querySearch(params.query, data);
      }
    }
 
    // check query 

    // fetch data based on that

    // output on the page
    // initPage();
    // setTimeout(()=>{
    //   handleSearch();
    // }, 500)

    
    
  //eslint-disable-next-line
  }, [location])



  function getParams(location) {
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get('query') || ''
    };
  }
  
  function setParams() {
    const searchParams = new URLSearchParams();
    searchParams.set("query", query);
    return searchParams.toString();
  }



  const updateURL = () => {
    
    const url = setParams();
    //do not forget the "?" !
    // console.log(url);
    props.history.push(`?${url}`);
  };

  const clearURL = () => {
    // console.log('props history: ',props.history);
    props.history.push(`/shop`);
    // const searchParams = new URLSearchParams();
    // searchParams.set
    // const url = 
    // history.pushState(null, "", query[1]);
  }


  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value.trim());
  }


  const querySearch = (qry, data) => {
      const results = data.filter((item) => {
        let found = item.name.includes(qry) || item.slugs.find(slug => slug === qry);
        return found;
      })
      setShopData(results);
  }
  const handleSubmit = (e) => {
    setQuery(inputRef.current.value.trim()); // submit
    e.preventDefault();
    handleSearch();
  }

  const handleSearch = () => {
    // setQuery(inputRef.current.value.trim()); // submit
    // console.log('queryis: ',query)

    let q = inputRef.current.value.trim();

    if(q === ''){
      setShopData(allData);
      clearURL();
      // clean url
      // go back to category page
    } else{
      // set URL
      updateURL();

      const results = allData.filter((item) => {
      let found = item.name.includes(query) || item.slugs.find(slug => slug === query);
      return found;
      
    })
    
    setShopData(results);
    }
    
  }

 
    return (
      <div>
        
        <PopulateWithData shopData={shopData} />
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
