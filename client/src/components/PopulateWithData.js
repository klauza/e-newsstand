import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { persistSearchView } from '../actions/miscActions';
import { Link } from 'react-router-dom';
import { addToBasket } from '../actions/basketActions';
import styled from 'styled-components';

const PageWrap = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 4fr;
  @media(max-width:768px){
  grid-template-columns: 1fr;
  }
`;
const DetailedSearch = styled.div`
  margin: 20px 10px 20px 0;
  border: 1px solid red;
  min-height: 150px;
  @media(max-width: 768px){
    margin: 20px 0 20px 0;
  }
`;

const TopBarViewAndSort = styled.div`
  display: flex; flex-direction: row; justify-content: space-around;
  @media(max-width: 768px){ flex-direction: column; }
`;
const DisplayView = styled.div`
  height: 50px;
  margin-top: 20px;
  display: flex; flex-direction: row;
  align-items: center;
  span{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5em;
    margin-top: -10px;
  }
  button{
    height: 100%;
    margin: 0 10px;
    border: 0;
    background: white;
    outline: 0;
    i{
      padding: 10px;
      transition: all 500ms ease-out;
      font-size: 2em;
      &:hover{
        transition: all 175ms ease;
        cursor: pointer;
        color: white;
        text-shadow: 0px 0px 5px #000000;
      }
    }
  }
`;
const Sortings = styled.div`
  height: 50px;
  margin-top: 20px;
  display: flex; flex-direction: row;
  align-items: center;
  
  span{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.5em;
    margin-top: -10px;
  }
  select{
    margin-top: -5px;
  }
`;

const ItemsWrapper = styled.div`
  margin: 15px 0 20px;
  width: 100%;
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
  ${props => props.Display ? (`grid-template-columns: repeat(auto-fit, minmax(205px, 1fr))`) : (`grid-template-columns: 1fr`)}
  grid-auto-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 35px;
  justify-content: center;
  a{
    text-decoration: none;
  }
  @media(max-width: 768px){
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    ${props => props.Display ? (`grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))`) : (`grid-template-columns: 1fr`)}
    grid-column-gap: 5px;
    grid-row-gap: 20px;
  }
`;

const Item = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: ${props => props.Display ? ('1fr') : ('1fr 1fr') };
  /* grid-template-columns: 1fr; */
  grid-template-rows: ${props => props.Display ? ('auto') : ('90px 20px 90px') };
  border: 1px solid grey;
  box-shadow: 0px 4px 4px -3px rgba(0,0,0,0.6);
  transition: box-shadow 175ms ease, border 175ms ease;
  &:hover{
    transition: all 175ms ease;
    border: 1px solid black;
    box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.7);
  }
`;
const ItemName = styled.h4`
  margin: 10px 0;
  text-align: center;
  color: black;
  font-weight: 700;
  grid-column: ${props => props.Display ? (null) : ("2 / 3")};
  grid-row: ${props => props.Display ? (null) : ("1 / 2")};

`;
const ItemImage = styled.div`
  width: 100%; height: 100%;
  padding: ${props => props.Display? ("0 5px") : ("0")}; 
  grid-column: ${props => props.Display ? (null) : ("1 / 2")};
  grid-row: ${props => props.Display ? (null) : ("1 / 4")};

  img{
    width: 100%; height: 100%;
    object-fit: cover;
  }
`;
const ItemPrice = styled.div`
  text-align: center;
  color: red;
  align-self: flex-end;
  grid-column: ${props => props.Display ? (null) : ("2 / 3")};
  grid-row: ${props => props.Display ? (null) : ("2 / 3")};
`;
const ItemShortDesc = styled.div`
  padding: 5px 10px;
  align-self: flex-end;
  text-align: center;
  color: grey;
  grid-column: ${props => props.Display ? (null) : ("2 / 3")};
  grid-row: ${props => props.Display ? (null) : ("3 / 4")};
`;

const PopulateWithData = ({misc: {searchView}, shopData, addToBasket, persistSearchView}) => {

  const [view, setView] = useState(searchView); // true=inline || false=blocks
  

  // const throwToBasket = (item) => {
  //   addToBasket(item);
  // }
  {/* <button onClick={()=>throwToBasket(item)}>add to basket</button> */}
  // console.log(searchView);

  const setViewToInline = () => {
    if(view !== false){ 
      setView(false);

      // update redux
      persistSearchView(false);
    }
  }

  const setViewToBlocks = () => {
    if(view !== true){ 
      setView(true);
      // update redux
      persistSearchView(true);
    }
  }



 if(shopData.length > 0){
    return ( 
      <PageWrap>
        <DetailedSearch><div>detailed search (filter) </div> <br/><hr/><br/> <div>popular items populated vertically- to fill up whitespace (hide on mobile) </div></DetailedSearch>
        
        <div>
          <TopBarViewAndSort>

            <DisplayView>
              <span>View:</span> 
              <button onClick={setViewToBlocks}><i className="fa fa-th"></i></button>
              <button onClick={setViewToInline}><i className="fa fa-align-justify"></i></button>
            </DisplayView>

            <Sortings>
              <span>Sort by:</span>
              <select name="" id="">
                <option value="">Newly added</option>
                <option value="">Lowest Price</option>
                <option value="">Highest Price</option>
              </select>
            </Sortings>

          </TopBarViewAndSort>

          <ItemsWrapper Display={view}>
            {shopData.map(item => 
              <Link key={item.id} to={{ pathname: `/shop/item/${item.id}`}}>
                <Item Display={view}>
                  <ItemName Display={view}>{item.name}</ItemName>
                  <ItemImage Display={view}><img src={item.imgs[0]} alt=""/></ItemImage>
                  <ItemPrice Display={view}>£ {item.price}</ItemPrice>
                  <ItemShortDesc Display={view}>{item.shortDesc}</ItemShortDesc>
                  {/* long desc */}
                </Item>
              </Link>
            )}
          </ItemsWrapper>

        </div>
      </PageWrap>
    )
  } else{
    return (  <div>Nothing was found</div> )
  }
}


const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  basket: state.basket,
  misc: state.misc
})
export default connect(mapStateToProps, {addToBasket, persistSearchView})(PopulateWithData)
