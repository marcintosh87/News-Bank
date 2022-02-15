import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./components/modal.css";
const theme = createTheme({
  palette: {
    primary: {
      light: "#ed4b82",
      main: "#e91e63",
      dark: "#a31545",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffd453",
      main: "#ffca28",
      dark: "#b28d1c",
      contrastText: "#fff",
    },
    zIndex: "1",
  },
});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="bg-light">
            <Header />
            <MainContent />
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
