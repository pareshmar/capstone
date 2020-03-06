import React from 'react';
import {withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import { AuthContext } from "../Auth";
import firebase from 'firebase';
import BottomNav from '../Components/Navigation';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid);
      // User logged in already or has just logged in.
    //   console.log(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  });

const Profile = () => {
    return(
        <div>
            <h1>Profile</h1>

            <BottomNav></BottomNav>
        </div>
    );
}

export default Profile;
