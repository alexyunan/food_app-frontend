const { createTheme } = require("@mui/material");

export const foodOrderTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF6347", // A vibrant and appetizing coral color for the primary theme
    },
    secondary: {
      main: "#5A20CB", // 
    },

    background: {
      main: "#F8F9FA", // A light and neutral background color
      default: "#FFFFFF", // Pure white background for cleanliness
      paper: "#FFFFFF", // White paper-like surfaces
    },
    text: {
      primary: "#FFFFFF", 
    },
  },
});
