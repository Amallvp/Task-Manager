import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginComp from "./Components/LoginComp/LoginComp";
import SignupComp from "./Components/SignupComp/SignupComp";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
   
    <> 
    <Header/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
