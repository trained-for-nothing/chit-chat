import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonC(props) {
  return <Button variant="contained">{props.value}</Button>;
}
