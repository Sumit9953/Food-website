import React from 'react'
import { useEffect } from 'react';

//To read id from the url like /restaurant/:123 thne they return 123
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {

  const params = useParams();
  const {resId} = params;

  useEffect(() => {
    getRestaurantInfo();
  },[])

  async function getRestaurantInfo(){
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16407")
    const json = await data.json();

    console.log(json);
  }

  return (
    <div>
        <h1>Restaurant id : {resId}</h1>
        <h2>Namste</h2>
    </div>
  )
}

export default RestaurantMenu