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
        <h3>{state.profile['ticker']}</h3>
        <div className='details-price'>
        <h3>Current Price: </h3>
        <h5>${state.quote['c']}</h5>
        </div>
        </div>
        <div className='details-desc-right'>
        <h3>{state.profile['name']}</h3>
        <div>
        <h3>Price Change: </h3>
        <h5>{state.quote['pc']}%</h5>
        </div>
        </div>
        </div>
        </div>

        <div className='detail-info'>
        <div className='left'>
        <div className='left-left'>
        
        <h3>Earnings Date</h3>
        <h3>Market Capitalization</h3>
    
        <h3>Average Daily Volume (10 Day)</h3>
        </div>
        <div className='left-right'>
       
        <h5>{state.earning.date}</h5>
        <h5>{state.basic['marketCapitalization']}</h5>
        
        <h5>{state.basic['10DayAverageTradingVolume']}</h5>
        </div>
        </div>
        <div className='right'>
        <div className='right-left'>
        <h3>52 Week High</h3>
        <h3>52 Week Low</h3>
        <h3>Outstanding Shares</h3>
        </div>
        <div className='right-right'>
        <h5>${state.basic['52WeekHigh']}</h5>
        <h5>${state.basic['52WeekLow']}</h5>
        <h5>{state.profile['shareOutstanding']}</h5>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Breakdown
