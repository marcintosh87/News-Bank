Example layout for bootstrap icons

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { ArrowRight } from "react-bootstrap-icons";

function App() {
return (

<div className="container">
<ArrowRight color="royalblue" size={96} />
<Header />
<MainContent />
<Footer />
</div>
);
}

export default App;

https://icons.getbootstrap.com/#usage
