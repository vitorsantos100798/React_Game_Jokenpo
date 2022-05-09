import React from "react";
import Main from "./Pages/main";
import Champion from "./components/Champion";
import ListRounds from "./components/SeeRounds"
import { ContextProvider } from "./contexts/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Champion" element={<Champion />} />
            <Route path="/ListRounds" element={<ListRounds/>} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
