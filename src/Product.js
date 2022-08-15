import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';


// "Product" is the CARDS/ITEMS inside page
function Product({id, title, image, price, rating}) {
  
  const [{ basket }, dispatch] = useStateValue();

  // Ths const dispaches the item into the dataLayer
  const addToBasket = () => {
    dispatch({
      type:'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>

      <div className='product__info'> 
        <p>{title}</p>
        <p className='product__price' >
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating' >
          {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
        </div>
        
      </div>

      <img 
        src={image}
        alt='Amazon product image fom: https://images-na.ssl-images-amazon.com/images/I/610hYytBgdL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
      />

      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;