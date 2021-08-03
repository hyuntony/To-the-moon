import dotenv from 'dotenv'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
require('dotenv').config();
const finnhub = require('finnhub');
const API_key = process.env.REACT_APP_FINNHUB_KEY


const Breakdown = () => {
    let symbol = 'AAPL'
  const [state, setState] = useState({
    symbol: {},
    quote: {},
    basic: {},
    profile: {},
    earning: {}
  });
  useEffect(() => {

    const symbolLookup = `https://finnhub.io/api/v1/search?q=${symbol}&token=${API_key}`
    const quoteLookup = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_key}`
    const basicLookup = `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${API_key}`
    const profileLookup = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_key}`
    const earningLookup = `https://finnhub.io/api/v1/calendar/earnings?from=2021-07-21&to=2021-08-01&symbol=${symbol}&token=${API_key}`
    Promise.all([
      axios.get(symbolLookup),
      axios.get(quoteLookup),
      axios.get(basicLookup),
      axios.get(profileLookup),
      axios.get(earningLookup)
    ])
      .then((all) => {
        const [symbol, quote, basic, profile, earning] = all;
        console.log(earning)
        setState((prev) => {
          return {...prev, symbol: symbol.data.result, quote: quote.data, basic: basic.data.metric, profile: profile.data, earning: earning.data.earningsCalendar[0] };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    return (
    <div className='details-breakdown'>

        <div>
        <img src={state.profile["logo"]}></img>
        <div className='details-desc'>
        <div className='details-desc-left'>
        <p>{state.profile['ticker']}</p>
        <div className='details-price'>
        <p>Current Price: </p>
        <p>${state.quote['c']}</p>
        </div>
        </div>
        <div className='details-desc-right'>
        <p>{state.profile['name']}</p>
        <div>
        <p>Price Change: </p>
        <p>{state.quote['pc']}%</p>
        </div>
        </div>
        </div>
        </div>

        <div className='detail-info'>
        <div className='left'>
        <div className='left-left'>
        
        <p>Earnings Date</p>
        <p>Market Capitalization</p>
    
        <p>Average Daily Volume (10 Day)</p>
        </div>
        <div className='left-right'>
       
        <p>{state.earning.date}</p>
        <p>{state.basic['marketCapitalization']}</p>
        
        <p>{state.basic['10DayAverageTradingVolume']}</p>
        </div>
        </div>
        <div className='right'>
        <div className='right-left'>
        <p>52 Week High</p>
        <p>52 Week Low</p>
        <p>Outstanding Shares</p>
        </div>
        <div className='right-right'>
        <p>${state.basic['52WeekHigh']}</p>
        <p>${state.basic['52WeekLow']}</p>
        <p>{state.profile['shareOutstanding']}</p>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Breakdown
