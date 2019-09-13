import React, { useEffect, useState } from 'react';
import PopulateWithData from './PopulateWithData';
// import history from '../history';

// import queryString from 'query-string';



  




const Shop = (props) => {
  // const loc = history;
  const { location } = props;
  const params = getParams(location);

  const [shopData, setShopData] = useState([]);
  const [allData, setAllData] = useState([]); 
  const [query, setQuery] = useState(params.query);





  useEffect(()=> {
    // history.push(`/shop?query=${query}`);
    console.log("query: ", query);
    console.log("params: ", params);
    console.log("url location: ",location); 
    // console.log('loc: ', loc);

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


  const handleSearch = (e) => {
    
    e.preventDefault();
    // console.log("search query: ", query);

    if(query === ''){
      setShopData(allData);
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
        <form onSubmit={handleSearch}>
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
