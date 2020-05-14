import React from 'react';

import SearchResultItem from './SearchResultItem'


export default function SearchResults(props) {
  // const [reviews, setReviews] = React.useState([]);
  // Kevin: When you need the companies, just get it like this.
  // Type props.location.state.companies
  const companies = props.companies;

  // const getReviews = () => {
  //   const companyReviews = axios.get(`/api/review?company_id=${companies[0].id}`);
    
  //   Promise.all([companyReviews])
  //     .then((all) => {
  //       console.log(all[0].data.total_avg)
  //       setReviews({
  //         [reviews]: all[0].data.total_avg,
  //       });
  //     });
  // }
  
  // console.log(reviews)
  
  return companies && companies.map(company => {
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
          // rating={getReviews}
          />
      </>
    );
  })
}