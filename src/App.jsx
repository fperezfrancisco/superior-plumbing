import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
