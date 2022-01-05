// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBWVB9D2S-3JqSW1hSMjcVQGBsZvRKUVY8',
	authDomain: 'wur-game.firebaseapp.com',
	projectId: 'wur-game',
	storageBucket: 'wur-game.appspot.com',
	messagingSenderId: '304898882024',
	appId: '1:304898882024:web:a70e8780072f21c7ce4c5d',
	measurementId: 'G-7EZRN7RY5W',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
