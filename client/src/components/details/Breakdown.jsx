// import dotenv from "dotenv";
import { red } from "@material-ui/core/colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailBuySell from "./DetailBuySell";
const Breakdown = ({ user }) => {
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
  const weekHigh = (h) => {
    if (h > showPrice()) {
      return twoDec(h);
    } else {
      return showPrice();
    }
  };
  const weekLow = (l) => {
    if (l < showPrice()) {
      return twoDec(l);
    } else {
      return showPrice();
    }
  };
  const format = (p) => {
    return `${(p / 1000).toFixed(2)}B`;
  };
  const twoDec = (p) => {
    return Math.round(p * 100) / 100;
  };

  const showPriceChange = () => {
    const priceNow = showPrice();
    const priceChange = ((priceNow - state.quote.pc) / priceNow) * 100;
    return priceChange.toFixed(2);
  };
  const color = (p) => {
    if (p > 0) {
      return { color: "green" };
    } else {
      return { color: "red" };
    }
  };
  return (
    <>
      <div className="details-breakdown">
        {state.symbol.logo ? <img src={state.symbol.logo}></img> : null}
        <h1>{state.symbol.name}</h1>
        <p className="details-ticker">{state.symbol.ticker}</p>
        <div>
          <p>Current Price:</p>
          <p>${showPrice()}</p>
        </div>
        <div>
          <p>Percentage Price Change:</p>
          <p style={color(showPriceChange())}>{showPriceChange()}%</p>
        </div>
        <div>
          <p>Market Capitalization:</p>
          <p>${format(state.symbol.marketCapitalization)}</p>
        </div>
        <div>
          <p>Share Outstanding:</p>
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
      <DetailBuySell user={user} price={price} />
    </>
  );
};

export default Breakdown;
