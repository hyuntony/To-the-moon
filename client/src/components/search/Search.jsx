import { useState, useEffect, Fragment } from 'react';
const finnhub = require('finnhub');

import SearchIcon from '@material-ui/icons/Search';
import SearchBar from './SearchBar';

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c447d8qad3iftpcn1s5g"
const finnhubClient = new finnhub.DefaultApi()

// Promise.all([
//   new Promise((resolve, reject) => {
//     finnhubClient.symbolSearch('apple', (error, data, response) => {
//     resolve(data);
//     });
//   }),
//   new Promise((resolve, reject) => {
//     finnhubClient.symbolSearch('alphabet', (error, data, response) => {
//     resolve(data);
//     });
//   })
// ])
//   .then((values) => {
//     const [data1, data2] = values;
//     console.log('value1', data1)
//     console.log('value2', data2)
//   })
//   .catch(err => {
//     console.log(err)
//   })

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  return (
    <Fragment>
      <SearchIcon />
      <SearchBar onSearch={term => setTerm(term)} />
    </Fragment>
  )
}

export default Search
