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
        <div className="logo-name">
        <img src={state.profile["logo"]}></img>
        <h1>{state.profile['ticker']}</h1>
        </div>
        <h1>{state.profile['name']}</h1>
        <h1>52 Week High</h1>
        <h5>{state.basic['52WeekHigh']}</h5>
        <h1>52 Week Low</h1>
        <h5>{state.basic['52WeekLow']}</h5>
        <h1>Price Change</h1>
        <h5>{state.quote['pc']}</h5>
        <h1>Current Price</h1>
        <h5>{state.quote['c']}</h5>
        <h1>Market Capitalization</h1>
        <h5>{state.basic['marketCapitalization']}</h5>
        <h1>10 Day Average Trading Volume</h1>
        <h5>{state.basic['10DayAverageTradingVolume']}</h5>
        <h1>Outstanding Shares</h1>
        <h5>{state.profile['shareOutstanding']}</h5>
    </div>
    )
}

export default Breakdown
