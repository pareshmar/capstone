import react from 'react';
import firebase from "firebase";

state = {
    userId: '',
    userImg: '',
    userName: '',
    postImg: '',
    postActivity: '',
    postMsg: ''

}
    const dbRef = firebase.database().ref('/feed');
    dbRef.on('value', snapshot => {
        console.log(snapshot.val());
    });

function someComponent() {
    return (
        <div>

        </div>
    )
}

export default someComponent;