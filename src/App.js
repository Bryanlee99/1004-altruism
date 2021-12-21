import { Route, Routes } from "react-router-dom";

// Theme
import { ThemeProvider } from "@mui/styles";
import theme from "theme";

// Helpers
import IntroSlideLoader from "text/loaders/introSlideLoader.js";
import ArticleSeriesLoader from "text/loaders/articleSeriesLoader.js";
import DecisionLoader from "text/loaders/decisionPageLoader.js";

// Components
import Landing from "components/Landing/Landing.js";
import Intro from "components/Landing/Intro.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/intro" element={<Intro />} />
        {IntroSlideLoader()}
        {ArticleSeriesLoader()}
        {DecisionLoader()}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
