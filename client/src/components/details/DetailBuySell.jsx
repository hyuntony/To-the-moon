import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

const DetailBuySell = () => {
    const [value, setValue] = useState('')
    const { symbol } = useParams();
    const buyOnClick = () => {
        console.log(`Buy: ${value} ${symbol} Stock`)
    }
    const sellOnClick = () => {
        console.log(`Sell: ${value} ${symbol} Stock`)
    }
    return (
        <div className='buy-sell-func'>
      <TextField id="outlined-basic" type='text' label="Outlined" variant="outlined" onChange={event => setValue(event.target.value)}/>
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
