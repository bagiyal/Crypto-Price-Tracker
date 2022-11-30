import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Homepage} from "./Pages/Homepage";
import Header from "./components/Header";
import { CoinPage } from "./Pages/CoinPage";


 
function App() {
  return (
    <BrowserRouter>
      <div className="classes.root">
        <Header />
        <Routes>
        <Route path="/" element={ <Homepage/>} />
        <Route path="/coins/:id" element={<CoinPage/>} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
