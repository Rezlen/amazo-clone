import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from "./Orders";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// use STRIPEPROMISE instead o PROMISE alone. That is the standard
const stripePromise = loadStripe(
  "pk_test_51LWn8FCfw5E16AHfibab9eOG492xJMsQjBriAPYR90K50E0eiOQLYn7dZqenzUChlIzj7mAdgIMThPuATy3K7Izd00h1SPyBYU"
);


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...It is similar to IF STATEMENT. It only runs ONCE when app components loads. 
  
  // Who has signed in? This is how we keep track of them.
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        // if the user is logged in & pga refreshes, Firebase keeps the user AUTH (Loggedin)
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <Router>
      {/*BEM*/}
      <div className='app'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/orders' element={[<Header />, <Orders />]} />
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route path='/payment' element={[<Header />, <Elements stripe={stripePromise} > <Payment/> </Elements>]} /> {/*whole component PAYMENT you're showing here should be wrapped by Elements, not some part of. <Elements stripe={stripePromise} > <Payment/> </Elements> */}
          <Route path='/' element={[<Header />, <Home/>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
