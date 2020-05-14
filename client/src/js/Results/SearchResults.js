import React from 'react';

import SearchResultItem from './SearchResultItem'


export default function SearchResults(props) {

  // Kevin: When you need the companies, just get it like this.
  // Type props.location.state.companies
  const companies = props.companies;

  //Average rating needs to be passed to the return below, to be passed as props to SearchResultItem.js - Brad

  return companies.map(company => {

    return (
      <>
          <SearchResultItem
            key={company.id}
            id={company.id}
            name={company.name}
            description={company.description}
            trade={company.trade_type}
            location={company.location}
            photo={company.photo_url}
            // rating={state.review.total_avg}
          />
      </>
    );
  })
}