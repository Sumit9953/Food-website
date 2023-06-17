import React from "react";
import { Title } from "./Header";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-300 dark:text-white dark:bg-black justify-between flex px-32 p-4 bottom-0 ">
     
        <Title />
        <ul className="flex flex-col">
          <Link to="/">
            <li className="p-2 font-bold transform transition duration-500 hover:scale-110">Home</li>
          </Link>

          <Link to="/about">
            <li className="p-2 font-bold transform transition duration-500 hover:scale-110">About</li>
          </Link>

          <Link to="/contact">
            <li className="p-2 font-bold transform transition duration-500 hover:scale-110">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="p-2 font-bold transform transition duration-500 hover:scale-110">Instamart</li>
          </Link>
        </ul>
      </div>
  );
};

export default Footer;
