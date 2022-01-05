import { authService } from '../services/userManagementService';
import { userManagementConstant } from '../store/constant';
export const userManagement = {
	createUser,
	signinUser,
};

function createUser(email, password) {
	return async dispatch => {
		const newUser = await authService.signup(email, password);
		if (newUser) {
			dispatch(setUserDetails(newUser));
			dispatch(setUserLogin(true));
		}
	};
	function setUserDetails(payload) {
		return { type: userManagementConstant.setUserDetails, payload };
	}
	function setUserLogin(payload) {
		return { type: userManagementConstant.setUserLogin, payload };
	}
}
function signinUser(email, password) {
	return async dispatch => {
		const currentUser = await authService.signin(email, password);
		if (currentUser) {
			dispatch(setUserDetails(currentUser));
			dispatch(setUserLogin(true));
		}
	};
	function setUserDetails(payload) {
		return { type: userManagementConstant.setUserDetails, payload };
	}
	function setUserLogin(payload) {
		return { type: userManagementConstant.setUserLogin, payload };
	}
}
