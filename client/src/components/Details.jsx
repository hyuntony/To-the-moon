import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c43vdjqad3iftpcmpmpg"
const finnhubClient = new finnhub.DefaultApi()

const Details = () => {
const [data, setData] = useState({})
const [data2, setData2] = useState({})
  Promise.all([
    new Promise((resolve, reject) => {
      finnhubClient.symbolSearch('apple', (error, data, response) => {
      resolve(data);
      });
    }),
    new Promise((resolve, reject) => {
      finnhubClient.symbolSearch('alphabet', (error, data, response) => {
      resolve(data);
      });
    })
  ])
    .then((values) => {
      const [data1, data2] = values;
      console.log(data1.count)
      // setData(prevState => {
      //   // Object.assign would also work
      //   return {...prevState, ...updatedValues};
      console.log(data2)
    })
    .catch(err => {
      console.log(err)
    })

  // const [data, setData] = useState('');
  // const API_key = 'c43vdjqad3iftpcmpmpg'
  
  // useEffect(() => {
  //   getAllData();
  // }, []);
  // const symbolLookup = `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${API_key}`
  // const quoteLookup = `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${API_key}`
  // const getAllData= () => {
  //   Promise.all([
  //     axios.get(symbolLookup),
  //     axios.get(quoteLookup)
  //   ])
  //   .then((response) => {
  //     const allData = response.data
  //     console.log(allData)
  //     setData(allData)
  //   })
  //   .catch(error => console.error(`Error: ${error}`))
  // }

  // let symbol = 'AAPL'
  // const [data, setData] = useState()
  // Promise.all([
  //   new Promise((resolve, reject) => {
  //     finnhubClient.symbolSearch(symbol, (error, data, response) => {
  //     resolve(data);
  //     });
  //   }),
  //   new Promise((resolve, reject) => {
  //     finnhubClient.companyBasicFinancials(symbol, "all", (error, data, response) => {
  //     resolve(data);
  //     });
  //   })
  // ])
  //   .then((values) => {
  //     const [data1, data2] = values;
  //     setData(data2.metric['52WeekHigh'],data2.metric['52WeekLow'])
      
    
  //   // const weekHigh = data2.metric['52WeekHigh']
  //   // const weekLow = data2.metric['52WeekLow']
      
     
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  return (
    <div className='details'>
      <h1>52 Week High</h1>
      <h5>{data}</h5>
    </div>
  )
}

export default Details

// last price                                   marketcap
// price change %                       outstanding shares
// 52week high                            avg daily volume
// 52week low                              earnings date


//   let URLs = [symbolLookup, quoteLookup]
//   function getAllData(URLs){
//     return Promise.all(URLs.map(fetchData));
//   }

//   function fetchData(URL) {
//     return axios
//     .get(URL)
//     .then(function(response) {
//       return {
//         success: true,
//         data: response.data
//       };
//     })
//     .catch(function(error) {
//       return { success: false };
//     });
//   }

// 