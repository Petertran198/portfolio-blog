//Remember to npm install firebase
import firebase from 'firebase/app';
//Also pull in these two services for db and auth services
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: 'AIzaSyChgFGpN-OgpaPO8rr3d5uQR1yCgtGPp2Y',
    authDomain: 'personal-blog-e2e83.firebaseapp.com',
    projectId: 'personal-blog-e2e83',
    storageBucket: 'personal-blog-e2e83.appspot.com',
    messagingSenderId: '20043458016',
    appId: '1:20043458016:web:ce85080284c709130ab785',
    measurementId: 'G-KB9PW8W8HQ',
};

firebase.initializeApp(firebaseConfig);

//Brings in the auth module
export const auth = firebase.auth();
