import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function GetStartedButton() {
  const classNamees = useStyles();

  return (
    <div classNameName={classNamees.root}>
      <Button variant="contained" color="primary" href="get_started">
        Get Started
      </Button>
    </div>
  );
}
