import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Set the background color to black
    },
    text: {
      primary: "#ffffff", // Set the text color to white
    },
  },
});

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Select
          value={selectedOption}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Select an option" }}
          style={{ backgroundColor: "#000000", color: "#ffffff" }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          <MenuItem
            value=""
            style={{ backgroundColor: "#000000", color: "#ffffff" }}
            disabled
          >
            More...
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={{ backgroundColor: "#000000", color: "#ffffff" }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </div>
    </ThemeProvider>
  );
};

export default Dropdown;
