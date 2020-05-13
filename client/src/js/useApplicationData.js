import React from 'react';
import axios from 'axios';

export default function useApplicationData(props) {
  const [searchParamsAndResults, setSearchParamsAndResults] = React.useState({
    trade: "",
    location: "",
    companies: [],
  });


  // handleTradeChange, handleLocationChange, and Search are all functions required by SearchBar.js - Brad
  const handleTradeChange = (event) => {
    const trade = event.target.name;
    setSearchParamsAndResults({
      ...searchParamsAndResults,
      [trade]: event.target.value,
    });
  };

  const handleLocationChange = (event) => {
    const location = event.target.name;
    setSearchParamsAndResults({
      ...searchParamsAndResults,
      [location]: event.target.value,
    });
  };

  const search = () => {
    const companySearch = axios
      .get(`/api/company?trade_type=${searchParamsAndResults.trade}&location=${searchParamsAndResults.location}`);
    // const companiesByLocation = axios
    //   .get(`/api/company?location=${state.location}`);

    Promise.all([companySearch])
      .then((response) => {
        const companies = "companies";
        // console.log(response[0].data.companies)
        setSearchParamsAndResults({
          ...searchParamsAndResults,
          [companies]: response[0].data.companies,
        });
        // Leaving the below code in, to implement a "no-results" error at a later time. - Brad
        // if (response[0].data.companies.length === 0) {
        // }
      });
  };
  console.log(searchParamsAndResults.companies);
  

  return { searchParamsAndResults, search, handleLocationChange, handleTradeChange };
}