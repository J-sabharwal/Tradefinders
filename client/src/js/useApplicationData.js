import { useEffect, useState } from "react";
import axios from 'axios';

export default function useApplicationData(props) {
  const [searchParams, setSearchParams] = useState({
    trade: "",
    location: "",
  });
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    const companySearch = axios
      .get(`/api/company?trade_type=${searchParams.trade}&location=${searchParams.location}`);
    
    Promise.all([companySearch]).then((res) => {
      const companies = "companies";
      setCompanyList(res[0].data.companies);
    }).catch((error) => {
      console.log(error);
    });
  }, [searchParams]);


  // handleTradeChange, handleLocationChange, and Search are all functions required by SearchBar.js - Brad
  const handleTradeChange = (event) => {
    const trade = event.target.name;
    setSearchParams({
      ...searchParams,
      [trade]: event.target.value,
    });
  };

  const handleLocationChange = (event) => {
    const location = event.target.name;
    setSearchParams({
      ...searchParams,
      [location]: event.target.value,
    });
  };

  // const Search = () => {
  //   const companySearch = axios
  //     .get(`/api/company?trade_type=${searchParams.trade}&location=${searchParams.location}`);
  //   // const companiesByLocation = axios
  //   //   .get(`/api/company?location=${state.location}`);

  //   Promise.all([companySearch])
  //     .then((response) => {
  //       const companies = "companies";
  //       // console.log(response[0].data.companies)
  //       setSearchParams({
  //         ...searchParams,
  //         [companies]: response[0].data.companies,
  //       });
  //       // Leaving the below code in, to implement a "no-results" error at a later time. - Brad
  //       // if (response[0].data.companies.length === 0) {
  //       // }
  //     });
  // };
  // console.log(searchParams.companies);
  
  const search = () => {
    console.log(companyList);
  };

  return {
    state: {...searchParams, companyList},
    search,
    handleLocationChange,
    handleTradeChange
  };
}