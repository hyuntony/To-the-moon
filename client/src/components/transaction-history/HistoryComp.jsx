import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import "./HistoryGrid.scss";
const HistoryComp = ({user}) => {
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
          field: 'symbol',
          headerName: 'Symbol',
          width: 150,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
        },
        {
          field: 'price',
          headerName: 'Price',
          type: 'number',
          width: 110,
        }, 
        {
          field: 'shares',
          headerName: 'Shares',
          type: 'number',
          width: 130,
        },
        {
          field: 'createdAt',
          headerName: 'Date',
          width: 150
        },
      ];
      
      // const rows = [
      //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      // ];
    
    
      const [rows, setRows] = useState([])
      // const columns = []
      useEffect(()=>{
    
        axios.get(`/user/history/${user._id}`)
        .then((res)=>{
          console.log(res.data);
          setRows(res.data)
        })
        .catch((err)=> {console.log(err)})
        
      })
      console.log(rows)
    
      return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
          />
        </div>
      );
}

export default HistoryComp
