import React from 'react'
import { useSelector } from 'react-redux'
import FoodCard from './FoodCard'
import { useDispatch } from 'react-redux'
import { clearcart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearcart())
    }

  return (
    <div className='h-screen p-5'>
        <div className='flex'>
        <h1 className='font-bold text-3xl'>Cart Items - {cartItems.length}</h1>
        <button onClick={() => handleClearCart()} className='bg-green-300 font-bold p-2 mx-5'>Clear cart</button>
        </div>
        <div className='flex'>
        {cartItems.map((item) => {
            return (
                <FoodCard key={item.id} {...item} />
            )
        }) }
        </div>
    </div>
  )
}

export default Cart