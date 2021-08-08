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
    let newDate = new Date(each.createdAt)
        return (<tr className='each-order'>
        <td className='each-detail'>{newDate.toLocaleDateString()}</td>
        <td className='each-detail'>{each.symbol}</td>
        <td className='each-detail'>{each.action}</td>
        <td className='each-detail'>{each.shares}</td>
        <td className='each-detail'>${each.price}</td>
        </tr>
        )
    })

    return (
        <table className='order-history'>
            <tr className='orders-header'>
                <th className='each-detail'>Date</th>
                <th className='each-detail'>Symbol</th>
                <th className='each-detail'>Action</th>
                <th className='each-detail'>Shares</th>
                <th className='each-detail'>Price</th>
                </tr>
            <>{array}</>
        </table>
    )
}

export default OrderHistories
