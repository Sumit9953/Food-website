import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './Shimmer'

//To read id from the url like /restaurant/:123 thne they return 123
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config';

const RestaurantMenu = () => {

  const [restaurant, setRestaurant] = useState(null)
  const [restaurantMenu, setRestaurantMenu] = useState([])
  const params = useParams();
  const {resId} = params;

  useEffect(() => {
    getRestaurantInfo();
  },[])

  async function getRestaurantInfo(){
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + resId)
    const json = await data.json();

    setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);
  }

// console.log(restaurantMenu);


  return (!restaurant) ? <Shimmer /> : (
    <div className='menu'>
        {/* <h1>Restaurant id : {resId}</h1> */}
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