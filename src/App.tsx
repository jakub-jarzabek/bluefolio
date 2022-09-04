import { useState } from "react";
import { Navbar } from "./components";
import {Admin,Home,Login} from './screens'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
