import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0a2342", 
    },
    text: {
      primary: "#ffffff", 
    },
  },
});

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = ["Sign Up", "FAQ", "Option 3", "Option 4"];

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Select
          value={selectedOption}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Select an option" }}
          style={{ backgroundColor: "#0a2342", color: "#ffffff" }}
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
            style={{
              backgroundColor: "#0a2342",
              color: "#ffffff",
              paddingTop: 2,
              paddingBottom: 2,
              margin: 0,
            }}
          >
            More...
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              dense
              style={{
                backgroundColor: "#0a2342",
                color: "#ffffff",
                paddingTop: 2,
                paddingBottom: 2,
                margin: 0,
              }}
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
