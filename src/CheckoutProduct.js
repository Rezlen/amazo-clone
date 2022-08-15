import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


// This page display the FULL details of the item which has been added to the basket
function CheckoutProduct({basketIndex, id, title, image, price, rating}) {
{/*const [{basket}, dispatch] = useStateValue();*/}
  const [{basket}, dispatch] = useStateValue();

  // Removes items from the basket
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
      basketIndex: basketIndex
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating' >
          {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;