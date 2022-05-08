import React from "react";
import Champion from "./components/Champion"
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const Rotas= () => {
   return(
    <BrowserRouter>
        <Routes>
        <Route  component = { <Champion/> }  path="/sobre"  />
        </Routes>
    </BrowserRouter>
   )
}

export default Rotas;