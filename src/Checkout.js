import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg' alt='Image from https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'/>
      
        <div>
          <h3>Hello, {user?.email}</h3> {/*the ? called (optional chaining) that is there; is to prevent the server sync delay which can happen during loading/connecting*/}
          <h2 className='checkout__title'>My Shopping Basket</h2>
          
          {/* for react-dom v6 or later INDEX needed */}
          {basket.map((item, index) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              key={index} // for react-dom v6 or later needed.
              basketIndex={index} // for react-dom v6 or later needed
            />
          ))}

        </div>

      </div>

      <div className='checkout__right'>
          <Subtotal />
      </div>

    </div>
  );
}

export default Checkout;