import React from 'react';

import SearchResultItem from './SearchResultItem'


export default function SearchResults(props) {
  console.log("In SearchResults:")
  console.log(props)

  return (
    <>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
     
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </div>
    </>
  )
}