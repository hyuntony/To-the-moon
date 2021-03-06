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

export default function TextButtons(props) {
  const classNamees = useStyles();

  return (
    <div className={classNamees.root}>
      <Button href={props.href}>{props.text}</Button>
    </div>
  );
}
