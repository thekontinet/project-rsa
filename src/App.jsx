import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import FormLayout from "./pages/FormLayout";
import Home from "./pages/Home";


function App() {
  return (
    // <div className="bg-primary-500">App</div>
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course-application" element={<FormLayout/>}/>
      </Routes>
    </>
  );
}

export default App;
