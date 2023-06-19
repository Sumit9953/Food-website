import resturantlogo from "../media/resturantlogo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useState , useEffect , useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


// named export
export const Title = () => {
  return (
    <a href="/">
      <div className="p-2 flex items-center  ">
        <img className="h-28 dark:invert w-28" src={resturantlogo} alt="logo" />
        <h1 className="font-bold text-2xl ">
          <em>Food Machine</em>
        </h1>
      </div>
    </a>
  );
};

const Headrer = () => {
  const isOnline = useOnline();

  const [theme, setTheme] = useState("light")

  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems);

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  
  return (
    <div className="flex dark:text-white  dark:bg-black p-2 justify-between items-center shadow-lg bg-white ">
      <Title />
      
      <div className="flex space-x-2">
        <ul className="flex space-x-2 ">
          <Link to="/">
            <li className=" bg-gray-100 text-stone-900 p-2 px-4 rounded-full font-bold hover:bg-gray-300 hover:fon text-xl">Home</li>
          </Link>

          <Link to="/about">
            <li className=" bg-gray-100 text-stone-900 p-2 px-4 rounded-full font-bold hover:bg-gray-300 hover:fon text-xl" >About</li>
          </Link>

          <Link to="/contact">
            <li className=" bg-gray-100 text-stone-900 p-2 px-4 rounded-full font-bold hover:bg-gray-300 hover:fon text-xl">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className=" bg-gray-100 text-stone-900 p-2 px-4 rounded-full font-bold hover:bg-gray-300 hover:fon text-xl">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className=" bg-gray-100 text-stone-900 p-2 px-4 rounded-full font-bold hover:bg-gray-300 hover:fon text-xl">Cart - {cartItems.length} items</li>
          </Link>
        </ul>
        <h1 className="p-2 rounded-full">{isOnline ? "✅": "📴"}</h1>
        {user.name}
        <button className="bg-gray-200 p-2 px-4 dark:text-black rounded-3xl" onClick={handleThemeSwitch}>
          Dark Mode
        </button>
      </div>
    </div>
  );
};

// Default export
export default Headrer;
