import React from 'react'
import { IMG_CDN_URL_CAR } from '../config'
import { Carousel } from 'react-responsive-carousel';


const Carousal = ({creativeId  }) => {
  console.log(creativeId);
  return (
    <div className='m-4 transform transition duration-500 hover:scale-110 shadow-md'>
      <img className='w-72 h-72' src={IMG_CDN_URL_CAR + creativeId} alt="" />
    </div>
  )
}

export default Carousal