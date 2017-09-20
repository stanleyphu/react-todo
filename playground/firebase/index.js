import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCfxJjfXhtusUkvUP5vNBRljj1cIKbWT8c",
    authDomain: "phu-todo-app.firebaseapp.com",
    databaseURL: "https://phu-todo-app.firebaseio.com",
    storageBucket: "phu-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Stanley',
        age: 22
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log("child_added", snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Play video games'
});

todosRef.push({
    text: 'Go to sleep'
});