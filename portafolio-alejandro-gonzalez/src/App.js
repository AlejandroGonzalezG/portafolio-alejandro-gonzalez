import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.css';
import Navbar from './Components/Navbar';
import Home from './Views/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} exact path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
