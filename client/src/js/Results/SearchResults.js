import React from 'react';

import SearchResultItem from './SearchResultItem'


export default function SearchResults(props) {
  console.log("In SearchResults:")
  console.log(props.location.state.companies)
  // Kevin: When you need the companies, just get it like this.
  // Type props.location.state.companies

  return (
    <>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        <SearchResultItem 
          foo="memes"
          bar="lol"
        />
        <SearchResultItem />
        <SearchResultItem />
     
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </div>
    </>
  )
}