import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import "./HistoryGrid.scss";

const columns = [
  { field: "id" },
  { field: "Name", width: 120 },
  {
    field: "Price",
    type: "number",
    width: 120,
    valueFormatter: ({ value }) => `$${value}`,
  },
  {
    field: "Shares",
    type: "number",
    width: 120,
    valueFormatter: ({ value }) => `${value}`,
  },
  {
    field: "buySell",
    headerName: "Bought/Sold",
    width: 160,
    valueFormatter: ({ value }) => `${value}`,
  },
  {
    field: "Status",
    width: 120,
    valueFormatter: ({ value }) => `${value}`,
  },
  {
    field: "Date",
    type: "number",
    width: 120,
    valueFormatter: ({ value }) => `${value}`,
  },
];

const rows = [
  {
    id: 1,
    Name: "AAPL",
    Price: 7.1,
    Status: "Pending",
    Shares: -10,
    Date: "Jan 1, 2021",
    buySell: "Bought",
  },
  {
    id: 2,
    Name: "GOOGL",
    Price: 14.9,
    Status: "Filled",
    Shares: 18.2,
    Date: "Jan 1, 2021",
    buySell: "Sold",
  },
  {
    id: 3,
    Name: "MSFT",
    Price: 8.1,
    Status: "Pending",
    Shares: 12.3,
    Date: "Jan 1, 2021",
    buySell: "Sold",
  },
  {
    id: 4,
    Name: "TSLA",
    Price: 20.2,
    Status: "Filled",
    Shares: 19.2,
    Date: "Jan 1, 2021",
    buySell: "Bought",
  },
];

const useStyles = makeStyles({
  root: {
    "& .green": {
      backgroundColor: "#00e676",
      color: "#1a3e72",
    },
    "& .red": {
      backgroundColor: "#ff1744",
      color: "#1a3e72",
    },
    "& .yellow": {
      backgroundColor: "#ffea00",
      color: "#1a3e72",
    },
  },
});

export default function StylingAllCells() {
  const classes = useStyles();

  return (
    <div>
      <h1 className="history-title">Order History</h1>
      <div style={{ height: 400, width: "100%" }} className={classes.root}>
        <DataGrid
          rows={rows}
          columns={columns}
          getCellClassName={(params) => {
            if (params.field === "id") {
              return "";
            }
            if (params.value === "Pending") {
              return "yellow";
            }
            return params.value === "Sold" ? "red" : "green";
          }}
        />
      </div>
    </div>
  );
}
