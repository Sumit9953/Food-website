import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(serachInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(serachInput)
  );
 
  return filterData;
}

const Body = () => {
  // serachText is a local state variable
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [serachInput, setSerachInput] = useState(""); // To create state variable

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={serachInput}
          onChange={(e) => {
            setSerachInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(serachInput, restaurants);

            setRestaurants(data);
          }}
          className="serach-btn"
        >
          Search
        </button>
      </div>
      <div className="resturnat-lists">
        {restaurants.map((resturant) => {
          return <RestaurantCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
