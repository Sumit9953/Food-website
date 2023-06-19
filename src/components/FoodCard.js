import { IMG_CDN_URL } from "../config";


const FoodCard = ({name , category, imageId ,price}) => {

    return (
      <div className="w-60 h-72 transform transition duration-500 hover:scale-110 shadow-md mx-4 my-2 p-2">
        <img className="w-full" src={IMG_CDN_URL + imageId } alt="" />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{category}</h3>
        <h4>{price/100} ₹</h4>
      </div>
    );
  };

  export default FoodCard;