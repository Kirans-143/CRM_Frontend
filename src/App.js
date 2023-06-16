import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Customer from "./pages/customer/Customer";
import Engineer from "./pages/engineer/Engineer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/engineer" element={<Engineer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
