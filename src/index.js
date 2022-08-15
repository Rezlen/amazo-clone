import React from 'react';
import { createRoot } from 'react-dom/client'; // for react version 18.2.0
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';


const container = document.getElementById('root');
const root = createRoot(container); {/* In React 18.2 Container & ROOT has been replaced React.Dom; check: https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18 */}
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// if you want your app to work offline and load faster, you can change unregister() to register() below. Note this come with pitfals.
// Learn more about service worker: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
