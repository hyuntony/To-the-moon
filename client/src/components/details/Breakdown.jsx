import dotenv from 'dotenv'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
dotenv.config();
const finnhub = require('finnhub');

const Breakdown = () => {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c43vdjqad3iftpcmpmpg"
    const finnhubClient = new finnhub.DefaultApi()
  const [state, setState] = useState({
    symbol: {},
    quote: {},
    basic: {},
    profile: {}
  });
  useEffect(() => {
    const API_key = 'c43vdjqad3iftpcmpmpg'
    const symbolLookup = `https://finnhub.io/api/v1/search?q=apple&token=${API_key}`
    const quoteLookup = `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${API_key}`
    const basicLookup = `https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=${API_key}`
    const profileLookup = `https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=${API_key}`
    Promise.all([
      axios.get(symbolLookup),
      axios.get(quoteLookup),
      axios.get(basicLookup),
      axios.get(profileLookup)
    ])
      .then((all) => {
        const [symbol, quote, basic, profile] = all;
        setState((prev) => {
          return {...prev, symbol: symbol.data.result, quote: quote.data, basic: basic.data.metric, profile: profile.data };
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
        <h3>{state.profile['ticker']}</h3>
        <h3>{state.profile['name']}</h3>
        </div>
        <div className='detail-info'>
        <div className='left'>
        <div className='left-left'>
        <h3>Current Price</h3>
        <h3>Market Capitalization</h3>
        <h3>Price Change</h3>
        <h3>10 Day Average Trading Volume</h3>
        </div>
        <div className='left-right'>
        <h5>{state.quote['c']}</h5>
        <h5>{state.basic['marketCapitalization']}</h5>
        <h5>{state.quote['pc']}</h5>
        <h5>{state.basic['10DayAverageTradingVolume']}</h5>
        </div>
        
        </div>
        <div className='right'>
        <div className='right-left'>
        <h3>52 Week High</h3>
        <h3>52 Week Low</h3>
        <h3>Outstanding Shares</h3>
        <h3>Outstanding Shares</h3>
        </div>
        <div className='right-right'>
        <h5>{state.basic['52WeekHigh']}</h5>
        <h5>{state.basic['52WeekLow']}</h5>
        <h5>{state.profile['shareOutstanding']}</h5>
        <h5>{state.profile['shareOutstanding']}</h5>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Breakdown
