import React from 'react';
import axios from 'axios';

export default function useApplicationData(props) {
  const [state, setState] = React.useState({
    trade: "",
    location: "",
    companies: [],
    goToSearchResults: false,
  });

  // Brad - handleTradeChange, handleLocationChange, and Search are all functions required by SearchBar.js
  const handleTradeChange = (event) => {
    const trade = event.target.name;
    if (event.target.value !== "") {
      setState({
        ...state,
        [trade]: event.target.value,
      });
    }
  };

  const handleLocationChange = (event) => {
    const location = event.target.name;
    if (event.target.value !== "") {
      setState({
        ...state,
        [location]: event.target.value,
      });
    }
  };

  const Search = () => {
   axios.get(`/api/company?trade_type=${state.trade}&location=${state.location}`)
      .then((response) => {
        const companies = "companies";
        setState({
          ...state,
          [companies]: response.data.companies,
          goToSearchResults: true,
        });
      });
    
  };

  
  return { state, Search, handleLocationChange, handleTradeChange };
}