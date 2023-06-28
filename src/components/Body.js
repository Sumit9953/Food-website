import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import CarousalCard from "./CarousalCard";

// import { Carousel } from "react-responsive-carousel";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Body = () => {
  // serachText is a local state variable
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [carousal, setCarousal] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [serachInput, setSerachInput] = useState(""); // To create state variable
  const { user, setUser } = useContext(UserContext);

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
    setCarousal(json?.data?.cards[0]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log(carousal);

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }

  if (!allRestaurant) return null;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="dark:bg-black">
      <div className="p-5 dark:text-white dark:bg-black bg-gray-200 text-center ">
        <input
          // style={{padding: "10px"}}
          type="text"
          className="w-1/3 outline-none bg-gray-300 hover:shadow-lg px-4 py-2 border-none rounded-full text-black "
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
        {/* <input type="text" value={user.name} onChange={ e => setUser({
          ...user,
          name: e.target.value
        })} /> */}
      </div>

      <div className=" bg-gray-900">
      <Carousel className="p-10" autoPlaySpeed={1000} swipeable={false} responsive={responsive}>
          {carousal?.map((item) => 
            <CarousalCard key={item.data.bannerId} {...item.data} />
           )}
      </Carousel>
      </div>

      {filteredRestaurants?.length === 0 ? (
        <h1>Not result</h1>
      ) : (
        <div className="flex dark:text-white dark:bg-black bg-gray-200  justify-center flex-wrap p-4 ">
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
    </div>
  );
};

export default Body;
