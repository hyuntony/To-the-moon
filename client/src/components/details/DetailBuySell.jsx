import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Popup from "./Popup";

const DetailBuySell = ({ user, price, setUser }) => {
  const userId = user._id;
  const [value, setValue] = useState("");
  const { symbol } = useParams();
  const [added, setAdded] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const [errorMess, setErrorMess] = useState(""); 

  const togglePopup = (e) => {
    setIsOpen(!isOpen);
    setMessage(e);
  };

  useEffect(() => {
    axios.get(`/api/watchlist/${userId}/${symbol}`)
        .then((res) => {
            if (res.data !== null) {
            setAdded(1);
            }
        });
  }, []);

    const addWatchlist = () => {
    axios
        .post(`/api/watchlist`, { symbol, user })
        .then(() => {
            setAdded(1);
        });
  };

  const removeWatchlist = () => {
    axios
      .post(`/api/watchlist/delete`, { symbol, user })
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        setAdded(0);
      });
  };
  const buyOnClick = () => {
    if (value.length > 0 && value > 0) {
      setStatus(0);
      togglePopup(`Purchase ${value} stock at ${price}?`);
    }
  };
  const confirmPurchase = () => {
    if (value.length > 0 && value > 0) {
      const action = "buy";
      axios
        .post(`/api/buy`, {
            symbol: symbol,
            quantity: Number(value),
            action: action,
            user,
            price: price,
        })
        .then((res) => {
            setUser(res.data);
            setValue("");
        })
        .then((res) => {
            togglePopup();
        })
        .catch((err) => {
            setIsOpen(!isOpen);
            setErrorMess(err.response.data);
        });
    }
  };

  const sellOnClick = () => {
    if (value.length > 0 && value > 0) {
      setStatus(1);
      togglePopup(`Sell ${value} stock at ${price}?`);
    }
  };

  const confirmSell = () => {
    if (value.length > 0 && value > 0) {
      const action = "sell";
      axios
        .post(`/api/sell`, {
          symbol: symbol,
          quantity: Number(value),
          action: action,
          user,
          price: price,
        })
        .then((res) => {
          setUser(res.data);
          setValue("");
        })
        .then(() => {
          togglePopup();
        })
        .catch((err) => {
          setIsOpen(!isOpen);
          setErrorMess(err.response.data);
        });
    }
  };

  const whichButton = () => {
    if (added === 0) {
      return (
        <Button
          variant="outlined"
          color="primary"
          value={value}
          onClick={addWatchlist}
        >
          Add To Watchlist
        </Button>
      );
    } else {
      return (
        <Button
          variant="outlined"
          color="primary"
          value={value}
          onClick={removeWatchlist}
        >
          Remove From Watchlist
        </Button>
      );
    }
  };

  const whichButtonNow = () => {
    if (status === 0) {
      return <button onClick={confirmPurchase}>Confirm</button>;
    } else {
      return <button onClick={confirmSell}>Confirm</button>;
    }
  };

  return (
    <div className="buy-sell-func">
      {/* <div style={{color: 'red', marginRight: '10px'}}>{errorMess}</div>   */}
      <div className="details-buttons">
        <TextField
          error={errorMess}
          id="outlined-basic"
          type="text"
          label="Quantity"
          variant="outlined"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          helperText={errorMess ? errorMess : ""}
        />
      </div>
      <div className="details-buttons">
        <div>
          {isOpen && (
            <Popup
              content={
                <>
                  <p>{message}</p>
                  {whichButtonNow()}
                  <button onClick={togglePopup}>Cancel</button>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
        <Button
          variant="outlined"
          color="primary"
          value={value}
          onClick={buyOnClick}
        >
          Buy
        </Button>
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={sellOnClick}
        >
          Sell
        </Button>
        {whichButton()}
      </div>
    </div>
  );
};

export default DetailBuySell;
