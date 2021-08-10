import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        setPrice(quote.data.c);
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
    };
    return () => {
      socket.close();
      console.log('unmount')
    };
  }, [url]);

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
    if (state.quote) {
      const priceChange = ((price - state.quote.pc) / price) * 100;
      return [(price - state.quote.pc).toFixed(2), priceChange.toFixed(2)];
    } else {
      return [0, 0];
    }
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
      <table className="table">
        <tbody>
          <tr>
            <td>Current Price:</td>
            <td className="breakdown-align">${price}</td>
          </tr>
          <tr>
            <td>Change:</td>
            <td className="breakdown-align" style={color(showPriceChange()[0])}>
              {showPriceChange()[0]}({showPriceChange()[1]}%)
            </td>
          </tr>
          <tr>
            <td>Market Capitalization:</td>
            <td className="breakdown-align">
              ${format(state.symbol.marketCapitalization)}
            </td>
          </tr>
          <tr>
            <td>Shares Outstanding:</td>
            <td className="breakdown-align">
              {twoDec(state.symbol.shareOutstanding)}M
            </td>
          </tr>
          <tr>
            <td>Average Daily Volume (10 Day):</td>
            <td className="breakdown-align">
              {twoDec(state.financial["10DayAverageTradingVolume"])}M
            </td>
          </tr>
          <tr>
            <td>52 Week High:</td>
            <td className="breakdown-align">
              ${weekHigh(state.financial["52WeekHigh"])}
            </td>
          </tr>
          <tr>
            <td>52 Week Low:</td>
            <td className="breakdown-align">
              ${weekLow(state.financial["52WeekLow"])}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Breakdown;
