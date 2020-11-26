import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBhnSlD5KZxTL2t5f9TZOUB95qkydPqVeA",
    authDomain: "brain-storming-d513a.firebaseapp.com",
    databaseURL: "https://brain-storming-d513a.firebaseio.com",
    projectId: "brain-storming-d513a",
    storageBucket: "brain-storming-d513a.appspot.com",
    messagingSenderId: "159483678167",
    appId: "1:159483678167:web:e8af43f88d0af34fd14f92",
    measurementId: "G-57J1X5BTMT"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);