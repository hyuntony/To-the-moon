import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { borderRight } from "@material-ui/system";

const useStyles = makeStyles({
  root: {
    "& .grey": {
      backgroundColor: "#f5f5f5",
    },
  },
});

export default function DataGridDemo({ user }) {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const columns = [
    {
      field: "Date",
      headerName: "Date",
      width: 250,
    },
    {
      field: "Symbol",
      headerName: "Symbol",
      headerAlign: "right",
      align: "right",
      width: 150,
      renderCell: (params) => (
        <Link className="symbol-link" to={`/details/${params.value}`}>
          {params.value}
        </Link>
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "Price",
      headerName: "Price",
      type: "number",
      width: 150,
      valueFormatter: ({ value }) => `$${value.toLocaleString("en", options)}`,
    },
    {
      field: "Shares",
      headerName: "Shares",
      type: "number",
      width: 150,
    },
    {
      field: "Total",
      headerName: "Value",
      type: "number",
      width: 150,
      valueFormatter: ({ value }) => `$${value.toLocaleString("en", options)}`,
      align: "right",
    },
  ];

  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get(`/user/history/${user._id}`)
      .then((res) => {
        for (const each of res.data) {
          let newDate = new Date(each.createdAt);
          const row = {
            id: each._id,
            Date: newDate.toLocaleString(),
            Symbol: each.symbol,
            Price: each.price,
            Shares: each.shares,
            Action: each.action,
            Total: each.price * each.shares,
          };
          setRows((prev) => [...prev, row]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setRows([]);
    };
  }, []);

  const classes = useStyles();
  return (
    <div>
      <a className="orders-title">Order History</a>
      <div
        className={classes.root}
        style={{
          height: 800,
          width: "100%",
          paddingBottom: 50,
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          getCellClassName={(params) => {
            if (params.field === "Action" && params.value === "sell") {
              return "grey";
            }
          }}
        />
      </div>
    </div>
  );
}
