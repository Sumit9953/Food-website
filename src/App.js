import React from "react";
//Default import
import Header from "./components/Header";
//named import
// import {Title} from './components/Header'

import Footer from "./components/Footer";

import "./index.css";

import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./utils/UserContext";

const App = () => {
  const [user, setUser] = useState({
    name: "sumit",
    email: "sumit@gmail.com",
  });

  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser
        }}
      >
        <Header />
        {/*All child component are in outlin provided by react-router-dom */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default App;
