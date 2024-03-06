import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import { foodOrderTheme } from "./Components/Theme/Theme";
import HomePage from "./Components/Home/HomePage";

function App() {
  return (
    <div>
      <ThemeProvider theme={foodOrderTheme}>
        <CssBaseline />
        <Navbar />
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
