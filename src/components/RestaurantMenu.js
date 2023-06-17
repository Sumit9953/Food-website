
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
    <div className='flex  dark:bg-black dark:text-white justify-between'>
    
        <div className='p-11 w-1/2 shadow-md rounded-lg'>
        <img className='w-full' src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" />
        <h2 className='font-bold text-2xl'>{restaurant.name}</h2>
        <h2>{restaurant.costForTwoMessage}</h2>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        </div>
        <div className='w-1/2'>
          <h1 className='font-bold text-3xl'>Menu</h1>
          
          <ul className='flex flex-wrap'>
            {restaurantMenu?.map((item) => { 
              return <div className='m-2 w-60'  key={item.card.info.id}>
              <img className='w-60' src={IMG_CDN_URL + item.card.info.imageId} alt="" />
              <li className='font-bold'>{item.card.info.name}</li>
              </div> 
            }
            ).slice(0, 10)}
          </ul>
        </div>
    </div> 
  )
}

export default RestaurantMenu