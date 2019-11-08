import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { persistSearchView, setPageLocation } from '../../../actions/miscActions';

// CSS
import {
   PageWrap, 
   DetailedSearch, 
   TopBarViewAndSort, 
   DisplayView, 
   Sortings, 
   ItemsWrapper, Item, ItemName, ItemImage, ItemPrice, ItemShortDesc 
} from './SearchPopulateCSS';

// temp data [featured items]
import cards from '../Home/HomeFeaturedProducts/data';

const PopulateWithData = ({ misc: {searchView, pageLocation}, shopData, persistSearchView, setPageLocation }) => {

  const [view, setView] = useState(searchView); // true=inline || false=blocks
  



  const setViewToInline = () => {
    if(view !== false){ 
      setView(false);           // local state
      persistSearchView(false); // redux state
    }
  }

  const setViewToBlocks = () => {
    if(view !== true){ 
      setView(true);            // local state
      persistSearchView(true);  // redux state
    }
  }

  const saveWindowPosition = () => {
    setPageLocation({...pageLocation, shop: window.pageYOffset});
  }


    return ( 
      <PageWrap>

        <DetailedSearch>
          <div>detailed search (filter) </div> 
          <br/><hr/><br/> 
          <h4 className="popular-items-header">Popular items</h4>
          {cards.map((item,id) => 
            <div className="popular-item" key={id}>
              <div className="popular-item__image"><img src={item.img} alt=""/></div>
              <div className="popular-item__desc">
                <span>{item.name}</span>
                <button>See more</button>
              </div>
            </div>
          )}
        </DetailedSearch>
        
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

          <ItemsWrapper view={view}>
            {shopData.map(item => 
              <Link key={item.id} to={{ pathname: `/shop/item/${item.id}`}} onClick={()=> saveWindowPosition()}>
                <Item view={view}>
                  <ItemName view={view}>{item.name}</ItemName>
                  <ItemImage view={view}><img src={item.imgs[0]} alt=""/></ItemImage>
                  <ItemPrice view={view}>£ {item.price}</ItemPrice>
                  <ItemShortDesc view={view}>{item.shortDesc}</ItemShortDesc>
                  {/* long desc */}
                </Item>
              </Link>
            )}
          </ItemsWrapper>

        </div>
      </PageWrap>
    )

}


const mapStateToProps = (state) => ({
  misc: state.misc
})
export default connect(mapStateToProps, {persistSearchView, setPageLocation})(PopulateWithData)
