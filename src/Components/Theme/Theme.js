const { createTheme } = require("@mui/material");

export const foodOrderTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF6347", // A vibrant and appetizing coral color for the primary theme
    },
    secondary: {
      main: "#4CAF50", // A fresh green color for the secondary theme
    },
    background: {
      main: "#F8F9FA", // A light and neutral background color
      default: "#FFFFFF", // Pure white background for cleanliness
      paper: "#FFFFFF", // White paper-like surfaces
    },
    text: {
      primary: "#333333", // Dark gray for primary text
      secondary: "#757575", // Lighter gray for secondary text
    },
  },
});
