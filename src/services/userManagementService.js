import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
} from 'firebase/auth';
import { app } from '../config/firebase/settings';
const firebase = app;
const auth = getAuth();
export const authService = {
	signin,
	signup,
};
async function signin(email, password) {
	const newUser = await signInWithEmailAndPassword(auth, email, password).catch(
		err => console.log('An Error while login the user'),
	);
	if (newUser) {
		return newUser.user;
	}
	return false;
}
async function signup(email, password) {
	const newUser = await createUserWithEmailAndPassword(
		auth,
		email,
		password,
	).catch(err =>
		console.log('An Error while registering the user in firebase'),
	);
	if (newUser) {
		sendEmailVerification();
		return newUser;
	}
	return false;
}
