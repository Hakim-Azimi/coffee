import "./App.css";
import CoffeShop from "./pages/CoffeShop";
import CoffeTimes from "./pages/CoffeeTimes";
import CoffeTypes from "./pages/CoffeeTypes";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<CoffeShop />} />
          <Route path="/types-of-coffee" element={<CoffeTypes />} />
          <Route path="/best-times-to-drink-coffee" element={<CoffeTimes />} />
        </Routes>
        <Footer/>





      </BrowserRouter>
    </div>
  );
}

export default App;