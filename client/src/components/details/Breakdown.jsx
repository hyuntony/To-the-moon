// import dotenv from "dotenv";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Breakdown = () => {
  const { symbol } = useParams();
  const [price, setPrice] = useState(0);
  const [state, setState] = useState({
    symbol: {},
    financial: {},
    quote: {},
  });
  useEffect(() => {
    Promise.all([
      axios.get(`/finn/${symbol}/profile`),
      axios.get(`/finn/${symbol}/financials`),
      axios.get(`/finn/${symbol}/quote`),
    ])
      .then((all) => {
        const [symbol, financial, quote] = all;
        setState((prev) => {
          return {
            ...prev,
            symbol: symbol.data,
            financial: financial.data,
            quote: quote.data,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const currentPrice = state.quote.c;
  useEffect(() => {
    const socket = new WebSocket("ws:localhost:3001/");

    socket.onopen = function (event) {
      console.log("connected to websocket-server");
      socket.send(symbol);
    };
    socket.onmessage = function (event) {
      setPrice(event.data);
      console.log(event.data);
    };
    return () => {
      console.log("hello");
      socket.close();
    };
  }, []);

  const showPrice = () => {
    if (!price) {
      return Math.round(currentPrice).toFixed(2);
    } else {
      return Math.round(price * 100).toFixed(2) / 100;
    }
  };
  const showPriceChange = () => {
    const priceNow = showPrice();
    const priceChange = ((priceNow - state.quote.pc) / priceNow) * 100;
    return priceChange.toFixed(2);
  };
  return (
    <div className="details-breakdown">
      <img src={state.symbol.logo}></img>
      <h1>{state.symbol.name}</h1>
      <p>{state.symbol.ticker}</p>
      <div>
        <p>Current Price:</p>
        <p>${showPrice()}</p>
      </div>
      <div>
        <p>Percentage Price Change:</p>
        <p>{showPriceChange()}%</p>
      </div>
      <div>
        <p>Market Capitalization:</p>
        <p>${state.symbol.marketCapitalization}</p>
      </div>
      <div>
        <p>Share Outstanding:</p>
        <p>{state.symbol.shareOutstanding}</p>
      </div>
      <div>
        <p>Daily Trading Volume (10 Day):</p>
        <p>{state.financial["10DayAverageTradingVolume"]}</p>
      </div>
      <div>
        <p>52 Week High:</p>
        <p>${state.financial["52WeekHigh"]}</p>
      </div>
      <div>
        <p>52 Week Low:</p>
        <p>${state.financial["52WeekLow"]}</p>
      </div>
    </div>
  );
};

export default Breakdown;
