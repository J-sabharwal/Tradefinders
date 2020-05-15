import React from "react";

import SearchResults from './SearchResults';

// Logic for Search results message should go here, and then is rendered in return below. For now I just have message which will always show both fields. - Brad.

export default function ResultsPage(props) {
  const companies = props.location.state.companies;
  const trade = props.location.state.trade;
  const location = props.location.state.location;

  //Check to see which search fields have input and change the results message accordingly - Brad
  let resultMessage = "";
  if (trade !== "" && location !== "") {
    resultMessage = `Search results for ${trade} in ${location}:`;
  } else if (trade !== "") {
    resultMessage = `Search results for ${trade} in all locations:`;
  } else if (location !== "") {
    resultMessage = `Search results for all companies in ${location}:`;
  } else {
    resultMessage = "Search Results for all companies in all locations:";
  }

  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        {resultMessage}
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