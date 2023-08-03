import React from 'react'

import { styled } from 'styled-components'

import SearchResultLInk from '../Componants/SearchResultLInk';
import SearchHeader from '../Componants/SearchHeader';

const SearchPage = () => {
  return (
    <Wrapper>
      <SearchHeader />
      <div className="search_body">

        <div className="blank"></div>
        <div className="">
          <div className="searchtimecounter">
            <p>About 49,30,000 results (0.26 seconds) </p>
          </div>
          <SearchResultLInk />
          <SearchResultLInk />
          <SearchResultLInk />
          <SearchResultLInk />
        </div>

      </div>


    </Wrapper>
  )
}

export default SearchPage

const Wrapper = styled.section`
 
  .search_body{
    
    display: grid;
    grid-template-columns: 15rem auto;
    .searchtimecounter{
      color: gray;
    }
  }
  @media screen and (max-width: 992px) {
    
    .search_body{    
    
    grid-template-columns: 1rem auto;
    .searchtimecounter{
      color: gray;
    }
  }
 
}
`