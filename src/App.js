import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-light">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
