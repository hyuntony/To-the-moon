import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Holdings.scss";
import axios from "axios";

const columns = [
  { field: "name", headerName: "Name", width: 120 },
  { field: "order", headerName: "Buy/Sell", width: 130 },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 130,
    valueFormatter: ({ value }) => `${value}`,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 120,
    valueFormatter: ({ value }) => `$${value}`,
  },
  {
    field: "avgCost",
    headerName: "Avg Cost",
    type: "number",
    sortable: false,
    width: 120,
    valueFormatter: ({ value }) => `$${value}`,
  },
  {
    field: "mktValue",
    headerName: "Mkt Value",
    type: "number",
    width: 140,
    valueFormatter: ({ value }) => `$${value}`,
  },
  {
    field: "bookCost",
    headerName: "Book Cost",
    type: "number",
    width: 140,
    valueFormatter: ({ value }) => `$${value}`,
  },
  {
    field: "gainLoss",
    headerName: "Gain/Loss Unrealized",
    type: "number",
    width: 210,
    valueFormatter: ({ value }) => `$${value}`,
  },
  {
    field: "percentage",
    headerName: "% of Portfolio",
    type: "number",
    width: 170,
    valueFormatter: ({ value }) => `${value}%`,
  },
];

const rows = [
  {
    id: 1,
    name: "AAPL",
    order: "Buy/Sell",
    quantity: 7.1,
    price: 10,
    avgCost: 100,
    mktValue: 500,
    bookCost: 300,
    gainLoss: 800,
    percentage: 20,
  },
  {
    id: 2,
    name: "GOOGL",
    order: "Buy/Sell",
    quantity: 14.9,
    price: 18.2,
    avgCost: 100,
    mktValue: 500,
    bookCost: 300,
    gainLoss: -400,
    percentage: 20,
  },
  {
    id: 3,
    name: "MSFT",
    order: "Buy/Sell",
    quantity: 8.1,
    price: 12.3,
    avgCost: 100,
    mktValue: 500,
    bookCost: 300,
    gainLoss: 800,
    percentage: 20,
  },
  {
    id: 4,
    name: "TSLA",
    order: "Buy/Sell",
    quantity: 20.2,
    price: 19.2,
    avgCost: 100,
    mktValue: 500,
    bookCost: 300,
    gainLoss: 200,
    percentage: 40,
  },
];

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

export default function StylingAllCells() {
  const classes = useStyles();

  return (
    <div>
      <h4 className="holdings-title">Holdings</h4>
      <div style={{ height: 400, width: "100%" }} className={classes.root}>
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
      </div>
    </div>
  );
}
