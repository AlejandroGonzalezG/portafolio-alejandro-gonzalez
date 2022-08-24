import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.css';
import Navbar from './Components/Navbar';
import SobreMi from "./Components/Sobremi";
import Proyectos from "./Components/Proyectos";
import Herramientas from "./Components/Herramientas";
import Contacto from "./Components/Contacto";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<SobreMi />} exact path="/" />
        <Route element={<Proyectos />} exact path="/proyectos" />
        <Route element={<Herramientas />} exact path="/herramientas" />
        <Route element={<Contacto />} exact path="/contacto" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
