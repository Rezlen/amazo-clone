import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom"; // In react-router-dom v6 useHistory() is replaced by useNavigate(). So do not use import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate(); // Helps to authenticate the user // In react-router-dom v6 useHistory() is replaced by useNavigate(). so do NOT use const history = useHistory();
  const [email, setEmail] = useState(''); // Do not place NO inside, leave it as empty string
  const [password, setPassword] = useState('');

  // this prevent the page to refresh on changes
  const signIn = e => {
    e.preventDefault();
    // Firebase details come here
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      navigate('/') // In react-router-dom v6 useHistory() is replaced by useNavigate(). So Do not use history.push('/')
    })
    .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    // Firebase register details come here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
          // it successfully created a new user with email and password
         console.log(auth);
          if (auth) {
            navigate('/') // In react-router-dom v6 useHistory() is replaced by useNavigate(). So Do not use history.push('/')
          }
      })
      .catch(error => alert(error.message))
  }
  
  return (
    <div className='login'>
        <Link to='/'>
            <img
                className="login__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
            />
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login;
