import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import MultistepForm from "./pages/MultistepForm";

function App() {
  return (
    // <div className="bg-primary-500">App</div>
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<MultistepForm/>}/>
      </Routes>
    </>
  );
}

export default App;
