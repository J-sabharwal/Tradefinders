import React from 'react';

import SearchResultItem from './SearchResultItem'


export default function SearchResults() {


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