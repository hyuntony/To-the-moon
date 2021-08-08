import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LineChart from "./LineChart";

const Breakdown = ({ user, price, setPrice }) => {
  const { symbol } = useParams();
  const [state, setState] = useState({
    symbol: {},
    financial: {},
    quote: {},
  });
  let url = window.location.pathname;
  
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
      setPrice(quote.data.c)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [url]);
  
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
      socket.close();
    };
  }, [url]);

  console.log(state)
  const weekHigh = (h) => {
    if (h >= price) {
      return twoDec(h);
    } else {
      return price;
    }
  };
  const weekLow = (l) => {
    if (l < price) {
      return twoDec(l);
    } else {
      return price;
    }
  };
  const format = (p) => {
    return `${(p / 1000).toFixed(2)}B`;
  };
  const twoDec = (p) => {
    return Math.round(p * 100) / 100;
  };

  const showPriceChange = () => {
    const priceChange = ((price - state.quote.pc) / price) * 100;
    return [(price - state.quote.pc).toFixed(2), priceChange.toFixed(2)];
  };

  const color = (p) => {
    if (p >= 0) {
      return { color: "green" };
    } else {
      return { color: "red" };
    }
  };

  return (
      <div className="details-breakdown">
        {state.symbol.logo ? <img src={state.symbol.logo}></img> : null}
        <h1>{state.symbol.name}</h1>
        <p className="details-ticker">{state.symbol.ticker}</p>
        <LineChart />
        <div>
          <p>Current Price:</p>
          <p>${price}</p>
        </div>
        <div>
          <p>Change:</p>
          <p style={color(showPriceChange()[0])}>
            {showPriceChange()[0]}({showPriceChange()[1]}%)
          </p>
        </div>
        <div>
          <p>Market Capitalization:</p>
          <p>${format(state.symbol.marketCapitalization)}</p>
        </div>
        <div>
          <p>Shares Outstanding:</p>
          <p>{twoDec(state.symbol.shareOutstanding)}M</p>
        </div>
        <div>
          <p>Average Daily Volume (10 Day):</p>
          <p>{twoDec(state.financial["10DayAverageTradingVolume"])}M</p>
        </div>
        <div>
          <p>52 Week High:</p>
          <p>${weekHigh(state.financial["52WeekHigh"])}</p>
        </div>
        <div>
          <p>52 Week Low:</p>
          <p>${weekLow(state.financial["52WeekLow"])}</p>
        </div>
      </div>
  );
};

export default Breakdown;
