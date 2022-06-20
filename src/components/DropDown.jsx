import { InputLabel, MenuItem, FormControl, Select, Box } from "@mui/material";
import PropTypes from "prop-types";

function ISDropdown({ label, data, ids, field, width, ...props }) {
  return (
    <Box sx={{ minWidth: width }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        {...props}
        sx={{ height: "37px", width: "200px" }}
      >
        {data.map((v, key) => (
          <MenuItem key={key} value={v[ids]}>
            {v[field]}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
ISDropdown.defaultProps = {
  data: [],
  width: 100,
};
ISDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  ids: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
  width: PropTypes.number,
};

export { ISDropdown };
