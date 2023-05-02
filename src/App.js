import "./App.css";
import CoffeShop from "./pages/CoffeShop";
import CoffeTimes from "./pages/CoffeeTimes";
import CoffeTypes from "./pages/CoffeeTypes";
import Navbar from "./components/Navbar/Navbar";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<CoffeShop />} />
          <Route path="/coffee-types" element={<CoffeTypes />} />
          <Route path="/coffee-time" element={<CoffeTimes />} />
        </Routes>
        
        <Footer/>





      
    </div>
  );
}

export default App;