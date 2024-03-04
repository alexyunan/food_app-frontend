import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import { foodOrderTheme } from "./Components/Theme/Theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={foodOrderTheme}>
        <CssBaseline />
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
