import { userManagementConstant } from '../store/constant';
const initialState = {
	isLogin: false,
	userDetails: {},
};
const userManagement = (state = initialState, action) => {
	switch (action.type) {
		case userManagementConstant.setUserLogin:
			return {
				...state,
				isLogin: action.payload,
			};
		case userManagementConstant.setUserDetails:
			return {
				...state,
				userDetails: action.payload,
			};
		default:
			return state;
	}
};
export default userManagement;
