import dotenv from 'dotenv'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
require('dotenv').config();
const finnhub = require('finnhub');
const API_key = process.env.REACT_APP_FINNHUB_KEY


const Breakdown = () => {
  
  const { symbol } = useParams();
  const [state, setState] = useState({
    symbol: {},
    financial: {},
  });
  useEffect(() => {
    Promise.all([
      axios.get(`/finn/${symbol}/profile`),
      axios.get(`/finn/${symbol}/financials`),
    ])
      .then((all) => {
        const [symbol, financial] = all;
        setState((prev) => {
          return {...prev, symbol: symbol.data, financial: financial.data};
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      
    <div className='details-breakdown'>
      <img src={state.symbol.logo}></img>
      <p>{state.symbol.name}</p>
      <p>{state.symbol.ticker}</p>
      <p>Market Capitalization: ${state.symbol.marketCapitalization}</p>
      <p>Share Outstanding: {state.symbol.shareOutstanding}</p>
      <p>Daily Trading Volume (10 Day): {state.financial['10DayAverageTradingVolume']}</p>
      <p>52 Week High: ${state.financial['52WeekHigh']}</p>
      <p>52 Week Low: ${state.financial['52WeekLow']}</p>
    </div>
    </div>
  )
    // return (
    // <div className='details-breakdown'>

    //     <div>
    //     <img src={state.profile["logo"]}></img>
    //     <div className='details-desc'>
    //     <div className='details-desc-left'>
    //     <p>{state.profile['ticker']}</p>
    //     <div className='details-price'>
    //     <p>Current Price: </p>
    //     <p>${state.quote['c']}</p>
    //     </div>
    //     </div>
    //     <div className='details-desc-right'>
    //     <p>{state.profile['name']}</p>
    //     <div>
    //     <p>Price Change: </p>
    //     <p>{state.quote['pc']}%</p>
    //     </div>
    //     </div>
    //     </div>
    //     </div>

    //     <div className='detail-info'>
    //     <div className='left'>
    //     <div className='left-left'>
        
    //     <p>Earnings Date</p>
    //     <p>Market Capitalization</p>
    
    //     <p>Average Daily Volume (10 Day)</p>
    //     </div>
    //     <div className='left-right'>
       
    //     <p>{state.earning.date}</p> change to P/E ratio (Price to earnings)
    //     <p>{state.basic['marketCapitalization']}</p>
        
    //     <p>{state.basic['10DayAverageTradingVolume']}</p>
    //     </div>
    //     </div>
    //     <div className='right'>
    //     <div className='right-left'>
    //     <p>52 Week High</p>
    //     <p>52 Week Low</p>
    //     <p>Outstanding Shares</p>
    //     </div>
    //     <div className='right-right'>
    //     <p>${state.basic['52WeekHigh']}</p>
    //     <p>${state.basic['52WeekLow']}</p>
    //     <p>{state.profile['shareOutstanding']}</p>
    //     </div>
    //     </div>
    //     </div>
    // </div>
    // )
}

export default Breakdown
