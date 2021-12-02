import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: "AIzaSyB6CQIjIKARZ5p4w3MtYJeWh5PpSZJDTLg",
	authDomain: "react-demo-d50c0.firebaseapp.com",
	databaseURL: "https://react-demo-d50c0-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "react-demo-d50c0",
	storageBucket: "react-demo-d50c0.appspot.com",
	messagingSenderId: "675636321594",
	appId: "1:675636321594:web:876955c136d32bc43f4403"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
};



export default firebase;
export const auth = firebase.auth();