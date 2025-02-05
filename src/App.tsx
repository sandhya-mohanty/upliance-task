
import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import Home from "./pages/Home";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      <Route path='/dashboard' element={<DashboardPage/>}/>
      </Routes>
      </BrowserRouter>
  );
};

export default App;
