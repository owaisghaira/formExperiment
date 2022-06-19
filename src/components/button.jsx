import React from "react";
import Button from "@mui/material/Button";

const OWButton = ({title , ...props}) => {
  return <Button {...props} variant="contained">{title}</Button>;
};

export default OWButton;
