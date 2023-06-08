import React from "react";
//Default import
import Header from "./components/Header";
//named import
// import {Title} from './components/Header'

import Body from "./components/Body";
import Footer from "./components/Footer";

import "./app.css";


const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
