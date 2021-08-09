import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";


export default function DataGridDemo({user}) {
  const columns = [
    {
      field: 'Date',
      headerName: 'Date',
      width: 250
    },
    {
      field: 'Symbol',
      headerName: 'Symbol',
      width: 150,
    },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
    },
    {
      field: 'Price',
      headerName: 'Price',
      type: 'number',
      width: 150,
      valueFormatter: ({value}) => `$${value.toFixed(2)}`
    }, 
    {
      field: 'Shares',
      headerName: 'Shares',
      type: 'number',
      width: 150,
    },
    { field: 'id', headerName: 'ID', width: 350 },
    
  ];
  
  const [rows, setRows] = useState([])
  useEffect(()=>{
    axios.get(`/user/history/${user._id}`)
    .then((res)=>{
      for (const each of res.data) {
        console.log(each._id)
        let newDate = new Date(each.createdAt)
        const row = {
          id: each._id,
        Date: newDate.toLocaleString(),
        Symbol: each.symbol,
        Price: each.price,
        Shares: each.shares,
        Action: each.action,
      }
      setRows(prev => [...prev, row])
      }
    })
    .catch((err)=> {console.log(err)})
    return () => {
      setRows([])
    }
  }, [])

  return (
    <div className='holdings-grid' style={{ height: 800, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={13}
      />
    </div>
  );
}


