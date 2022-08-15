import React from 'react'
import './Home.css'
import Product from './Product';

// "HOME" is all the area under the top BLACK HEADER
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?'
          alt='Amazon Body Banner from: https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?' 
        />

        <div className='home__row'>
          <Product 
            id='12345'
            title='Apple Watch Series 7 (GPS, 41mm) - Midnight Aluminium Case with Midnight Sport Band - Regular' 
            rating={5} 
            price={29.99} 
            image= 'https://images-na.ssl-images-amazon.com/images/I/610hYytBgdL.__AC_SX300_SY300_QL70_FMwebp_.jpg' 
          />
          <Product 
            id='12345'
            title='SMBZOMI USB Rechargeable Bike Light Set, 350 Lumen Super Bright Bike Lights' 
            rating={3} 
            price={100} 
            image= 'https://m.media-amazon.com/images/I/81T+1Ls3VvL._AC_SX522_.jpg' 
          />

        </div>

        <div className='home__row'>
         <Product 
            id='12345'
            title='Title is here' 
            rating={5} 
            price={29.99} 
            image= 'https://m.media-amazon.com/images/I/61NLtoB7zlL._AC_SX522_.jpg' 
          />
          <Product 
            id='12345'
            title='Second product Title is here' 
            rating={3} 
            price={100} 
            image= 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/48976502-45bd-4b0a-b9cd-1d35428bbc22._CR0,0,1200,628_SX460_QL70_.jpg' 
          />
          <Product 
            id='12345'
            title='Engineering for Babies (Baby 101) Board book – 11 July 2019' 
            rating={3} 
            price={100} 
            image= 'https://m.media-amazon.com/images/I/61weHrZiKlL._AC_SY450_.jpg' 
          />

        </div>

        <div className='home__row'>
          <Product 
            id='12345'
            title='Second product Title is here' 
            rating={3} 
            price={100} 
            image= 'https://m.media-amazon.com/images/I/81T+1Ls3VvL._AC_SX522_.jpg' 
          />
        </div>

      </div>
    </div>
  );
}

export default Home;