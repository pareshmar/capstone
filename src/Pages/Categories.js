// import firebase from '../Firebase/firebase';
import React, {Component} from 'react';
import firebase from 'firebase';

import Logo from '../assets/WeExplore-logo.svg';

let activity; 
let activityDescription;

let categoryTitle; 
let array = [];

class Categories extends Component {

    constructor(props){
    super(props);
            this.state = { activity: ''}
        }
         
        // DISPLAY MODAL & SHOW ACTIVITY 
        category = (event) =>{
        let activityDescription;
        console.log("click")
        let modal = document.getElementById("modal")
        modal.style.display = "block";

        this.activities();

            var database = firebase.database();

            if(event.target.className == 'outdoors'){

                // console.log("outdoors clicked");

                categoryTitle = "Outdoors";

                 array = [];
                database.ref('categories/' + 'outdoors').on('value', function(snapshot) {
                     array = snapshot.val();
                        let randomNumber = Math.floor(Math.random() * array.length);
                        activityDescription = array[randomNumber].description;
                });
                

                } else if(event.target.className == 'social'){

                // console.log('social was clicked');
                categoryTitle = "Friends";

                 array = [];
                database.ref('categories/' + 'friends').on('value', function(snapshot) {
                     array = snapshot.val();
                        let randomNumber = Math.floor(Math.random() * array.length);
                        activityDescription = array[randomNumber].description;
                });

            }else if(event.target.className == 'bodyculture'){
                
                categoryTitle = "Body & Mind";

                array = [];
               database.ref('categories/' + 'bodyculture').on('value', function(snapshot) {
                    array = snapshot.val();
                       let randomNumber = Math.floor(Math.random() * array.length);
                       activityDescription = array[randomNumber].description;
               });
            } else if(event.target.className == 'culture'){
                
                categoryTitle = "Culture";

                array = [];
               database.ref('categories/' + 'culture').on('value', function(snapshot) {
                    array = snapshot.val();
                       let randomNumber = Math.floor(Math.random() * array.length);
                       activityDescription = array[randomNumber].description;
               });
            }
 
            this.setState({activity: activityDescription});
            console.log(this.state.activity)
        }

        // Set the state of activity to whatever t
        activities = () =>{
            this.setState({ activity: activityDescription });
        }

        randomize = () =>{
            console.log("click")
            let randomNumber = Math.floor(Math.random() * array.length);
            activityDescription = array[randomNumber].description;
            console.log(activityDescription)
            this.setState({ activity: activityDescription });
        }

        // close modal
         closeModal = () =>{
        let modal = document.getElementById("modal")
        modal.style.display = "none";
        }
    
    render(){

        return(
             <div>
                 <div className="header">
                    <img  id="logo" src={Logo}  width="65" alt="WeExplore Logo"/>
                     <h1>| Activities</h1>
                 </div>

                 <br/>

                 <div className="allCategories">
                 
                 <div className="categorydiv">
                 <p style={{backgroundColor: 'green'}} className="categoryTitleBlock">Outdoors</p>
                 <img className="outdoors" src="https://images.unsplash.com/photo-1445217143695-467124038776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1133&q=80" onClick={this.category}></img>
                </div>
                 
                <br/>

                <div className="categorydiv">
                <p  style={{backgroundColor: 'tomato'}} className="categoryTitleBlock">Friends</p>
                <img className="social" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" onClick={this.category}></img>  
                </div>

                <br/>

                <div className="categorydiv">
                <p  style={{backgroundColor: 'navy'}} className="categoryTitleBlock">Body & Mind</p>
                <img className="bodyculture" src="https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" onClick={this.category}></img>  
                </div>
                
                <br/>

                <div className="categorydiv">
                <p  style={{backgroundColor: 'purple'}} className="categoryTitleBlock"> Culture</p>
                <img className="culture" src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1115&q=80" onClick={this.category}></img>  
                </div>                 
                

                <div className="modal-class" id="modal">

                <div className="close" onClick={this.closeModal}>&times; </div>

                        <div className="modal-content">

                            <h2 className="categoryTitle">{categoryTitle}</h2>
                             <p><i>Activity: </i>{this.state.activity}</p>
                             </div>

                             <div className="buttons">
                                <button className="acceptbtn">Accept</button>
                                <button className="shufflebtn" onClick={this.randomize}>
                                    
                                </button>

                        </div>

                </div>
            
            </div>

            </div>
            
        )
    }

}

export default Categories