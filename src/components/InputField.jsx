import React from "react";
import TextField from "@mui/material/TextField";

const InputField = ({ placeholder , ...props }) => {
  return (
    <TextField
      id="outlined-basic"
      label={placeholder}
      variant="outlined"
      size="small"
      {...props}
    />
  );
};

export default InputField;
