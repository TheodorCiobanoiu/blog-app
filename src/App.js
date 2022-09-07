import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/details" element={<Details/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;