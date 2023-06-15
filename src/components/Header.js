import resturantlogo from "../media/resturantlogo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

// named export
export const Title = () => {
  return (
    <a href="/">
      <div className="p-2 flex items-center  ">
        <img className="h-28 w-28" src={resturantlogo} alt="logo" />
        <h1 className="font-bold text-2xl ">
          <em>Food Machine</em>
        </h1>
      </div>
    </a>
  );
};

const Headrer = () => {
  const isOnline = useOnline();
  
  return (
    <div className="flex p-2 justify-between items-center shadow-lg bg-white ">
      <Title />
      
      <div className="flex space-x-2">
        <ul className="flex space-x-2 ">
          <Link to="/">
            <li className=" bg-gray-100 p-2 px-4 rounded-full font-bold hover:bg-gray-300 hover:fon text-xl">Home</li>
          </Link>

          <Link to="/about">
            <li className=" bg-gray-100 p-2 px-4 rounded-full font-bold hover:bg-gray-300 hover:fon text-xl" >About</li>
          </Link>

          <Link to="/contact">
            <li className=" bg-gray-100 p-2 px-4 rounded-full font-bold hover:bg-gray-300 hover:fon text-xl">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className=" bg-gray-100 p-2 px-4 rounded-full font-bold hover:bg-gray-300 hover:fon text-xl">Instamart</li>
          </Link>

          <li className=" bg-gray-100 p-2 px-4 rounded-full font-bold hover:bg-gray-300 hover:fon text-xl">Cart</li>
        </ul>
        <h1 className="p-2 rounded-full">{isOnline ? "✅": "📴"}</h1>
      </div>
    </div>
  );
};

// Default export
export default Headrer;
