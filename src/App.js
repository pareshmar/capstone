// tutorial for authentication
// https://www.youtube.com/watch?v=unr4s3jd9qA
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { AuthProvider } from './Auth';
import PrivateRoute from './Privateroute';
// Components

// Pages
import Login from './Login';
import Feed from "./Feed";
import SignUp from './Signup';
import SignUpTwo from './Signuptwo'
// import  ForgotPassword  from './ForgotPassword';

function App() {
  return (
    <div className="App">
      {/* <Upload/> */}

      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Feed}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signuptwo" component={SignUpTwo}/>
            {/* this path wont show up */}
            
             {/* <Route exact path="/forgotpassword" component={ForgotPassword}/>  */}         

          </div>
        </Router>
      </AuthProvider>

    </div>

  );
}

export default App;
