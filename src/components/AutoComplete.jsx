import React from "react";
import TextField from "@mui/material/TextField";

const AutoComplete = ({ placeholder, ...props }) => {
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      label={placeholder}
      size="small"
      {...props}
    />
  );
};

export default AutoComplete;