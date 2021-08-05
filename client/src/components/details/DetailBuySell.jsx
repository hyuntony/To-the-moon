import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const DetailBuySell = ({ user }) => {
    const [value, setValue] = useState(0)
    const { symbol } = useParams();
    console.log(value.length)
    const addWatchlist = () => {
        axios.post(`/api/watchlist`, { symbol, user })
        .then((res) => {console.log(res.data)})
    }
    const buyOnClick = () => {
        if (value.length > 0 && value > 0) {
        axios.post(`/details/${symbol}/buy`, {symbol: symbol, quantity: value})
        .then((res) => {console.log(res.data)})
        console.log(`Buy: ${value} ${symbol} Stock`)
        }
    }
    const sellOnClick = () => {
        if (value.length > 0 && value > 0) {
        axios.post(`/details/${symbol}/sell`, {symbol: symbol, quantity: value})
        .then((res) => {console.log(res.data)})
        console.log(`Sell: ${value} ${symbol} Stock`)
        }
    }
    return (
        <div className='buy-sell-func'>
      <TextField id="outlined-basic" type='text' label="Outlined" variant="outlined" onChange={event => setValue(event.target.value)}/>
      <Button variant="outlined" color="primary" value={value} onClick={addWatchlist}>
                Add To Watchlist
            </Button>
            <Button variant="outlined" color="primary" value={value} onClick={buyOnClick}>
                Buy
            </Button>
            <Button variant="outlined" color="primary" onClick={sellOnClick}>
                Sell
            </Button>
        </div>
    )
}

export default DetailBuySell
