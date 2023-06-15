import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({name , cuisines, cloudinaryImageId,avgRating}) => {

    return (
      <div className="w-60 h-72 transform transition duration-500 hover:scale-110 shadow-md mx-4 my-2 p-2">
        <img src={IMG_CDN_URL + cloudinaryImageId } alt="" />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} star</h4>
      </div>
    );
  };

  export default RestaurantCard