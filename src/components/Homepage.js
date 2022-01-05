import React from 'react';
import { userManagement } from '../actions/userManagement';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from './shared/Navbar';
function Homepage(props) {
	let navigate = useNavigate();
	React.useEffect(() => {
		if (!props?.isLogin) {
			navigate('/auth/signin');
		}
	}, [props?.isLogin]);
	return (
		<>
			<Navbar />
		</>
	);
}
function mapStateToProps(state) {
	const { userManagement } = state;
	const { isLogin } = userManagement;
	return {
		isLogin,
	};
}
const mapDispatchToProps = {
	signinUser: userManagement.signinUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
