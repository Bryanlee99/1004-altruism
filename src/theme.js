// Theme
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#D47662",
      main: "#B54C36",
      dark: "#8D4C42",
      contrastText: "#fff",
    },
    secondary: {
      main: "#D39C45",
      contrastText: "#fff",
    },
    common: {
      brown: "#513D3D",
      yellow: "#D39C45",
      lightbrown: "#C2ADA5",
      red: "#B54C36",
      gray: "#98A2B0",
      pearlWhite: "#faf7f7",
    },
  },
  typography: {
    fontFamily: ["museo-sans"].join(","),
  },
  spacing: 8,
  singleSpacing: 1,
});

export default theme;
