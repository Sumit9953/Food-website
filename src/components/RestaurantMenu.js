
import Shimmer from './Shimmer'

//To read id from the url like /restaurant/:123 thne they return 123
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {

  const params = useParams();
  const {resId} = params;

  const restaurantData = useRestaurant(resId)
  
  const {restaurant , restaurantMenu} = restaurantData;

  return (!restaurant) ? <Shimmer /> : (
    <div className='menu'>
    
        <div>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" />
        <h2>{restaurant.name}</h2>
        <h2>{restaurant.costForTwoMessage}</h2>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {restaurantMenu?.map((item) => {
              return <div key={item.card.info.id}>
              <li>{item.card.info.name}</li>
              <img src={IMG_CDN_URL + item.card.info.imageId} alt="" />
              </div>
            }
            )}
          </ul>
        </div>
    </div> 
  )
}

export default RestaurantMenu