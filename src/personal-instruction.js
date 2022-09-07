1- npx create-react-app amazon-clone
2- remove unnecessary logo & style from app.js and remove test file, logo file.
3- create Header.js & its css
4 -remove margin from index.css
5- Create & connect your FireBase FREE storage/server compiler
6- import the following: import './Header.css'

7- Instal the ICONS from: https://mui.com/material-ui/icons/#icon-font-icons   by: npm install @mui/icons-material
8- import the following on your app.js:  import SearchIcon from '@mui/icons-material/Search'; (For importing ICONS)
 *rfce fro auto import***
9- to have other pages connected do NOt forget to import Router as well as adding <Router></Router> tags to the APP function in the app.js:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
10- add the pages inside the <switch></switch> tags. Inside of the add the <Route path= '/'><Route>. This default route must always be at the bottom otherwise will never be read.

import CurrencyFormat from 'react-currency-format';     [Did not work for:] Instal 'npm i react-currency-format' in your Subtotal.js. the used: 
so I used two commands: 
 npm install --save --legacy-peer-deps Then: npm install react-currency-format --save --force

 redux section 2:00:44

 In react 18.2.0 Different React-DOM  function style must be imported in INDEX.JS, APP.JS,  

--------------------
 Solution to the issue when removes the item in the basket from the top and not the item you click on:
https://www.youtube.com/watch?v=RDV3Z1KCBvo comment on the jyotika sethi 5 months ago

You need to modify this line in checkout.js to include the index value and key value. (if you do not include the key value you'll just get an error)
checkout.js ////
{basket.map((item, index) => (
                            <CheckoutProduct
                                key={index}
                                basketIndex={index}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                            />
                        ))}


Then in ProductCheckout.js add the basketIndex value and use it in the dispatch function
ProductCheckout.js  ////
function CheckoutProduct({ basketIndex, id, title, price, image }) {
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            basketIndex: basketIndex,
        })
    }

Finally in the reducer.js file add the 'REMOVE_FROM_BASKET' event which should look like this
reducer.js ////
case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

            newBasket.splice(action.basketIndex, 1);

            return {
                ...state,
                basket: newBasket
            };

Hope this helps :)

---------------

          <h3>Hello, {user?.email}</h3> {/*the ? called (optional chaining) that is there; is to prevent the server sync delay which can happen during loading/connecting*/}

============Configure and deploy Firebase Hosting sites==============
$ npm install -g firebase-tools
https://www.youtube.com/watch?v=RDV3Z1KCBvo insructio video from minutes: 4:37

firebase login
firebase init >
Hosting: Configure and deploy Firebase Hosting sites >
Please sellect an option > use an existing project > (Choose the project you have created in Firebase)
What do you want to use as your public directory? (public) build
Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
Set up automatic builds and deploys with GitHub? (y/N) n
THEN: npm run build
Lastly: firebase deploy
Project Console: https://console.firebase.google.com/project/amazo-clone1/overview
Hosting URL: https://amazo-clone1.web.app

=============STRIPE====================

For the payment page ad STRIPE payment tools/code.
npm i @stripe/stripe-js OR npm i @stripe/stripe-js --force
Then 
npm i @stripe/react-stripe-js OR npm i @stripe/react-stripe-js --force

===============

===============axios.js===============
after creating its faile: axios.js run this command: npm i axios
AXIOS is way of writing REQUESTS. It is a great FETCHING library
=========== after completing the Payment.js, you run the: firebase init
Are you ready to proceed? Yes
Functions: Configure a Cloud Functions directory and its files
? What language would you like to use to write Cloud Functions? JavaScript
? Do you want to use ESLint to catch probable bugs and enforce style? y
+  Wrote functions/package.json
+  Wrote functions/.eslintrc.js
+  Wrote functions/index.js
+  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? y
===============
Functions folder is the full backend. and has its own Node Modules, Json etc. At this point if you do npm INSTALL, it must be in the FUNCTIONS folder, otherwise it messes up things.
There we create an EXPRESS app & host it on a cloud function, escalable & full backend.
==========npm i express===========
While in the functions folder, run NPM I EXPRESS command
==========npm i cors==============
==========npm i stripe==============
Navigate in directories: 
To navigate into the root directory, use "cd /" 
To navigate to your home directory, use "cd" or "cd ~" 
To navigate BACK one directory level, use "cd .." 
To navigate to the previous directory (or back), use "cd folder name"
=========API Creation=========
1- App Config 2- Middleware 3-API routes  4- Listen command
========test the firebase & API test on local========
firebase emulators:start
THEN you find the API end point here: +  functions[us-central1-api]: http function initialized (http://localhost:5001/amazo-clone1/us-central1/api).
And all the logs here: http://localhost:4000/logs?q=metadata.emulator.name%3D%22functions%22

I had to enter"firebase emulators:start" (Restarting the backend) again next morning to start an engine, that goes to order peage after clicking on BUY NOW after going to checkout (Payment page); http://localhost:3000/payment
To check the payment has gone trhough, check the HOME at: https://dashboard.stripe.com/test/dashboard
===========
For database, go to Firebase https://console.firebase.google.com/u/0/project/amazo-clone1/firestore > Firebase Database > Start in Test Mode > 
======npm install moment=====
A great library to pass data/time stamps
in "order page" you must install MOMENT tools

=======Re-deploying functions== ===firebase deploy --only functions====
firebase deploy --only functions  >For adding new functions to your already running functions, you must be in functions folder terminal.
If this fails, you need to go to your firebase > at botom > Spark (Plan) > change to Blaze

You might fac error which can be because of the SPACES you place when naming your folder. Go to you firebase.jason file and do either of the followings:
https://stackoverflow.com/questions/48429390/firebase-deploy-errors-starting-with-non-zero-exit-code-space-in-project-path

What happens actually is that in Windows, firebase.json contains the following by default:

"predeploy": [
  "npm --prefix \"$RESOURCE_DIR\" run lint"
]
Modify it to:

"predeploy": [
  "npm --prefix \"%RESOURCE_DIR%\" run lint"
]

ORRRRRRRRR just remove:
"predeploy": [
  "npm --prefix \"$RESOURCE_DIR\" run lint"
]

that is hat I did.
Outcome of re-deploy can be seen at: https://console.firebase.google.com/project/amazo-clone1/overview then> Functions tab of the left > copy the Request link and past it in axios.js file
==========Deployings==========
Re-deploying functions: firebase deploy --only functions
Then redeploy (backend infact): npm run build
then re-deploy the hosting/front-end: firebase deploy --only hosting
==============Sometimes Error===============
If you stucked in RE-WRITE/Re-Deploy, you can remove the piece in firebase.jason

    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]

================






