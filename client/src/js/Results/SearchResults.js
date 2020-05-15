import React from 'react';

import SearchResultItem from './SearchResultItem';

//render all cards for search results
export default function SearchResults(props) {

  // Kevin: When you need the companies, just get it like this.
  // Type props.location.state.companies
  const companies = props.companies;

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
            photo={company.company_photo}
          />
      </>
    );
  });
}