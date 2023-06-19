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

import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  const [user, setUser] = useState({
    name: "sumit",
    email: "sumit@gmail.com",
  });

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
