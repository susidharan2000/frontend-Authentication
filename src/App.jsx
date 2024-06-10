import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Profile from './Pages/Profile';
import ForgetPassword from './Pages/ForgetPassword'
import { ToastContainer } from 'react-toastify';
import ResetPassword from './Pages/ResetPassword';
const App = () => {
  const [token,setToken] = useState('');
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route  path="/" element = {<Home/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login setToken={setToken}/>} />
        <Route path="/profile" element={<Profile token={token}/>} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;