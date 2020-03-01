import React, { useCallback, useContext, Component } from 'react';
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import firebase from "./Firebase/firebase";
import { AuthContext } from "./Auth";
import Upload from './Components/Upload';
 
const SignUpTwo = ({ history }) => {
  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const { biodetails } = event.target.elements;
    console.log(biodetails.value);
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        firebase.database().ref('users/' + user.uid).update({
          biodetails: biodetails.value
        });
        console.log(user.uid);
      } else {
    
      }
    
    });
    history.push("/");
  }, [history]);

  

  return (
    <div>
      <h1>Sign Up 2</h1>
      <Upload></Upload>
      <p>Tell us about yourself</p>

      <form onSubmit={handleSubmit}>
        
          <textarea className="Description" name="biodetails" type="textarea" placeholder="Write here.."/>
          <input type="submit" value="Submit" Link to= "/"/>
      </form>
      {/*<button><Link to="/">Done</Link></button>*/}
    </div>
  );
};
export default withRouter(SignUpTwo);