import * as firebase from 'firebase';

let fireBaseConfig = {
    apiKey: "Your apiKey",
    authDomain: "your auth domain",
    databaseURL: "your db url",
    storageBucket: "your storageBucket",
    messagingSenderId: "your id"
};

firebase.initializeApp(fireBaseConfig);

const firebaseApp = firebase.initializeApp(fireBaseConfig);
