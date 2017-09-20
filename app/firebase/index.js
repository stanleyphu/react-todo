import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyCfxJjfXhtusUkvUP5vNBRljj1cIKbWT8c",
        authDomain: "phu-todo-app.firebaseapp.com",
        databaseURL: "https://phu-todo-app.firebaseio.com",
        storageBucket: "phu-todo-app.appspot.com",
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;