import React from "react";

import SearchResults from './SearchResults'


// Logic for Search results message should go here, and then is rendered in return below. For now I just have message which will always show both fields. - Brad.

export default function ResultsPage(props) {
  const companies = props.location.state.companies;

  return (
    <>
      <h2
        style={{
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