import resturantlogo from "../media/resturantlogo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

// named export
export const Title = () => {
  return (
    <a href="/">
      <div className="logo">
        <img className="logo-img" src={resturantlogo} alt="logo" />
        <h1 id="title">
          <em>Food Machine</em>
        </h1>
      </div>
    </a>
  );
};

const Headrer = () => {
  const isOnline = useOnline();
  
  return (
    <div className="header">
      <Title />
      
      <div className="nav-item">
        <ul className="list-item">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>

          <li>Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? "✅": "📴"}</h1>
    </div>
  );
};

// Default export
export default Headrer;
