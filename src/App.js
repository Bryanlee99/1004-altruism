import { Route, Routes } from "react-router-dom";

// Theme
import { ThemeProvider } from "@mui/styles";
import theme from "theme";

// Components
import Landing from "components/Landing/Landing.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
