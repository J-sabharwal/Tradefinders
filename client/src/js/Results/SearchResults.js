import React from 'react';

import SearchResultItem from './SearchResultItem'


export default function SearchResults() {


  return (
    <>
      <div style={{
        display: "flex",
        marginLeft: '20px',
        marginRight: '20px',
      }}>
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </div>
      <div style={{
        display: "flex",
        marginLeft: '20px',
        marginRight: '20px',
      }}>
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </div>
    </>
  )
}