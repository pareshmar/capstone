// export default SignUp;

import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import firebase from "./Firebase/firebase";
import { AuthContext } from "./Auth";

const SignUp = ({history}) => {
  const handleSignup = useCallback(async event => {
    event.preventDefault();
    const {email,password,username} = event.target.elements;
    console.log(username.value);
    
    try {
      await firebase 
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/signuptwo");
    } catch (error){
      alert(error);
    }
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        firebase.database().ref('users/'+ user.uid).set({
          username: username.value,
          email: email.value,
         });
        console.log(user.uid);
      } else {

      }
    });
  }, [history] );

  return(
    <div>

      <div className="top-columns">

      <div className="c1">.</div>
      <div className="c2"></div>
      <div className="c3"></div>
      <div className="c4"></div>

      </div>

      <div className="createAccount">
        <h1 className="create-title">Create an Account</h1>
      </div>
      
      <div>1</div>
      <div>2</div>

      {/* <p>Enter date of birth</p>
      <input type="text" name="month" placeholder="MM"/>
      <input type="text" name="day" placeholder="DD"/>
      <input type="text" name="year" placeholder="YYYY"/> */}


      <form onSubmit={handleSignup}>
        <label>Email <input type="email" name="email" placeholder="email"/> </label>
        <label>Username <input type="text" name="username" placeholder="Username"/> </label>
        <label>Password <input type="password" name="password" placeholder="password"/> </label>
        <button type="submit">Sign up</button>
      </form>
      
      <p>Already have an account?</p>
      <button><Link to="/login">Login</Link></button>

    </div>
  );
};

export default withRouter(SignUp);