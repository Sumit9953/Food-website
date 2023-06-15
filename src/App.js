import React from "react";
//Default import
import Header from "./components/Header";
//named import
// import {Title} from './components/Header'

import Footer from "./components/Footer";

import "./index.css";


import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <>
      <Header />
      {/*All child component are in outlin provided by react-router-dom */}
      <Outlet /> 
      <Footer />
    </>
  );
};


export default App;
