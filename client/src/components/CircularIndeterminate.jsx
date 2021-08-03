import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularIndeterminate() {
  const classNamees = useStyles();

  return (
    <div className={classNamees.root}>
      <CircularProgress />
      <CircularProgress color="palette.secondary.light" />
    </div>
  );
}
