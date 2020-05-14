import React from "react";

import SearchResults from './SearchResults'

export default function ResultsPage(props) {
  const companies = props.location.state.companies;


  return (
    <>
      <h2 style={{
          display: "flex",
          justifyContent: "center",
        }}>
        Search results for {companies[0].trade_type} in {companies[0].location}
      </h2>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <SearchResults companies={companies} />
      </div>
    </>
  );
}