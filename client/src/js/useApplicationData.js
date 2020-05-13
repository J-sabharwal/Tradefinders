import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

export default function useApplicationData(props) {
  const [state, setState] = React.useState({
    trade: "",
    location: "",
    companies: [],
    goToSearchResults: false,
  });



  // handleTradeChange, handleLocationChange, and Search are all functions required by SearchBar.js - Brad
  const handleTradeChange = (event) => {
    const trade = event.target.name;
    setState({
      ...state,
      [trade]: event.target.value,
    });
  };

  const handleLocationChange = (event) => {
    const location = event.target.name;
    setState({
      ...state,
      [location]: event.target.value,
    });
  };

  const Search = () => {
    const companySearch = axios
      .get(`/api/company?trade_type=${state.trade}&location=${state.location}`);
    // const companiesByLocation = axios
    //   .get(`/api/company?location=${state.location}`);

    Promise.all([companySearch])
      .then((response) => {
        const companies = "companies";
          // console.log(response[0].data.companies)
          setState({
            ...state,
            [companies]: response[0].data.companies,
            goToSearchResults: true,
          });
        // Leaving the below code in, to implement a "no-results" error at a later time. - Brad
        // if (response[0].data.companies.length === 0) {
        // }
      });
    
  }

  

  return { state, Search, handleLocationChange, handleTradeChange };
};