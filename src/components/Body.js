import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  // serachText is a local state variable
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [serachInput, setSerachInput] = useState(""); // To create state variable

  useEffect(() => {
    //API Call
    getrestaurant();
  }, []);

  async function getrestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);

    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if(!isOnline){
    return <h1>🔴 Offline, please check your internet connection!!</h1>
  }

  if (!allRestaurant) return null;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-gray-200 text-center ">
        <input
        // style={{padding: "10px"}}
          type="text"
          className="w-1/3 outline-none bg-gray-200 hover:shadow-lg px-4 py-2 border-none rounded-full text-black "
          placeholder="Search"
          value={serachInput}
          onChange={(e) => {
            setSerachInput(e.target.value);
          }}
        />
        <button
        className="px-6 py-2 m-2 hover:bg-purple-500 bg-purple-300 rounded-full"
        // style={{backgroundColor: "green" , padding: "10px"}}
          onClick={() => {
            const data = filterData(serachInput, allRestaurant);

            setFilteredRestaurants(data);
          }}
          
        >
          Search
        </button>
      </div>

      {filteredRestaurants?.length === 0 ? (
        <h1>Not result</h1>
      ) : (
        <div className="flex bg-gray-200 items-center justify-center flex-wrap p-4 ">
          {filteredRestaurants.map((resturant) => {
            return (
              <Link
                to={"/restaurant/" + resturant.data.id}
                key={resturant.data.id}
              >
                <RestaurantCard {...resturant.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
