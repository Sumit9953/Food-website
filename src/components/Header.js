import resturantlogo from "../media/resturantlogo.png"

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
    return (
      <div className="header">
        <Title />
        <div className="nav-item">
          <ul className="list-item">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };


  // Default export
export default Headrer