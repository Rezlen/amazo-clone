import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
    
  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      // AXIOS is way of writing REQUESTS. It is a great FETCHING library
        const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits i.e. pense or cents e.g it understand 1000 as £10 so that is why we * it to 100 to get the correct number.
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret) // this comes back from the backend. When it comes back, allows to charge the customer secret key, the correct amount.
    }

    getClientSecret();
}, [basket])

console.log('THE SECRET IS >>>', clientSecret)
console.log('👱', user)

    const handleSubmit = async (event) => {
      // do all the fancy stripe stuff...
      event.preventDefault();
      setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
    // paymentIntent = payment confirmation from Stripe.

      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })

      setSucceeded(true);
      setError(null)
      setProcessing(false)

      dispatch({
        type: 'EMPTY_BASKET'
      })
      // so that after payment the cutomer does not come back too the payment page, they got to the ORDER page.
      navigate.replace('/orders')
    })

  }

  const handleChange = event => {
    // Listens for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }


  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (
          <Link to="/checkout">{basket?.length} items</Link>
          )
        </h1>


        {/* Payment section - delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map(item => (
              /* This way you RE-USE the the already deigned/css products */
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      

        {/* Payment section - Payment method */}
        <div className='payment__section'>
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                      <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"£"}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
                  
                {/* Errors, if there is an error with the card, display the error message on screen */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment;