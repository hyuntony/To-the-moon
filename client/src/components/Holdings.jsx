import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./Holdings.scss";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    "& .green": {
      color: "#00e676",
    },
    "& .red": {
      color: "red",
    },
  },
});

export default function Holdings({ user, totalPort, setTotalPort, update }) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const totPort = totalPort;

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 110,
      renderCell: (params) => (
        <Link className="symbol-link" to={`/details/${params.value}`}>
          {params.value}
        </Link>
      ),
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      disableColumnMenu: true,
      sortable: false,
      width: 100,
      valueFormatter: ({ value }) => `${value}`,
    },
    {
      field: "avgPrice",
      headerName: "Avg Price",
      type: "number",
      disableColumnMenu: true,
      sortable: false,
      width: 100,
      valueFormatter: ({ value }) =>
        value ? `$${value.toLocaleString("en", options)}` : 0,
    },
    {
      field: "currentPrice",
      headerName: "Current Price",
      type: "number",
      disableColumnMenu: true,
      sortable: false,
      width: 110,
      valueFormatter: ({ value }) => `$${value.toLocaleString("en", options)}`,
    },
    {
      field: "gainLoss",
      headerName: "Gain/Loss Unrealized",
      type: "number",
      disableColumnMenu: true,
      sortable: false,
      width: 160,
      valueFormatter: ({ value }) => `$${value.toLocaleString("en", options)}`,
    },
    {
      field: "mrkValue",
      headerName: "Market Value",
      type: "number",
      disableColumnMenu: true,
      sortable: false,
      width: 130,
      valueFormatter: ({ value }) => `$${value.toLocaleString("en", options)}`,
    },
    {
      field: "percentage",
      headerName: "% of Portfolio",
      disableColumnMenu: true,
      sortable: false,
      type: "number",
      width: 115,
      valueFormatter: ({ value }) => `${((value / totPort) * 100).toFixed(2)}%`,
    },
  ];

  useEffect(() => {
    for (const symbol in user.holdings) {
      Promise.all([
        axios.get(`/finn/${symbol}/quote`),
        axios.get(
          `/api/average/${user._id}/${symbol}/${user.holdings[symbol]}`
        ),
      ])
        .then((all) => {
          const [quote, average] = all;
          if (quote.data.c) {
            setTotalPort((prev) => {
              return prev + quote.data.c * user.holdings[symbol];
            });
          }
          const row = {
            id: symbol,
            name: symbol,
            quantity: user.holdings[symbol],
            avgPrice: average.data,
            currentPrice: quote.data.c ? quote.data.c : 0,
            gainLoss: (quote.data.c - average.data) * user.holdings[symbol],
            mrkValue: quote.data.c * user.holdings[symbol],
            percentage: quote.data.c * user.holdings[symbol],
          };
          setRows((prev) => [...prev, row]);
        })
        .catch((err) => console.log(err));
    }

    return () => {
      setRows([]);
      setTotalPort(0);
    };
  }, [update]);

  return (
    <div>
      <h4 className="holdings-title">Holdings</h4>
      <div
        style={{ height: 400, width: "100%", paddingLeft: 30 }}
        className={classes.root}
      >
        {rows.length > 0 && (
          <DataGrid
            rows={rows}
            columns={columns}
            getCellClassName={(params) => {
              if (params.field === "gainLoss" && Number(params.value) >= 0) {
                return "green";
              }
              return Number(params.value) <= 0 ? "red" : "";
            }}
          />
        )}
      </div>
    </div>
  );
}
