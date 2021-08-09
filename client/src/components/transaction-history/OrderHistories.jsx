import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './OrderHistories.scss'
const OrderHistories = ({user}) => {
    const [data, setData] = useState([])
useEffect(()=>{
    axios.get(`/user/history/${user._id}`)
    .then((res)=>{setData(res.data)})
    .catch((err)=> {console.log(err)})
},[])
const array = data.map(each => {
    let newDate = new Date(each.createdAt);
    let url = `/details/${each.symbol}`;
        return (<tr className='each-order'>
        <td className='each-detail'>{newDate.toLocaleString()}</td>
        <td className='each-detail'><Link className='link-details' to={url}>{each.symbol}</Link></td>
        <td className='each-detail'>{each.action}</td>
        <td className='each-detail'>${each.price.toFixed(2)}</td>
        <td className='each-detail'>{each.shares}</td>
        <td className='each-detail'>${(each.price * each.shares).toFixed(2)}</td>
        </tr>
        )
    })

    return (
        <table className='order-history'>
            <tr className='orders-header'>
                <th className='each-detail'>Date</th>
                <th className='each-detail'>Symbol</th>
                <th className='each-detail'>Action</th>
                <th className='each-detail'>Price</th>
                <th className='each-detail'>Amount(shares)</th>
                <th className='each-detail'>Value</th>
                </tr>
            <>{array}</>
        </table>
    )
}

export default OrderHistories
