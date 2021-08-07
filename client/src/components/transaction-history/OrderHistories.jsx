import React, { useEffect, useState } from 'react'
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
        return (<tr className='each-order'>
        <td>{each.symbol}</td>
        <td>{each.action}</td>
        <td>{each.shares}</td>
        <td>{each.price}</td>
        <td>{each.createdAt}</td>
        </tr>
        )
    })

    return (
        <table className='order-history'>
            <tr className='orders-header'><th>Symbol</th><th>Action</th><th>Shares</th><th>Price</th><th>Date</th></tr>
            <>{array}</>
        </table>
    )
}

export default OrderHistories
