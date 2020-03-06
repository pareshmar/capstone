import React, { Component,  } from 'react';
import { Link } from 'react-router-dom';

class BottomNav extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                    <Link to ="/profile"><img
                    src='../assets/profile.jpg' alt='hiking' width='100px'> profile</img></Link>
                    </li>
                    <li>
                    <Link to ="/login"><img
                    src='../assets/profile.jpg' alt='hiking' width='100px'></img></Link>
                    </li>
                    <li>
                    <Link to ="/"><img src='../assets/profile.jpg'
                    alt='hiking' width='100px'></img></Link>
                    </li>
                    <li>
                    <Link to ="/"><img src='../assets/profile.jpg'
                    alt='hiking' width='100px'></img></Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default BottomNav;
