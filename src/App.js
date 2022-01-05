import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Signin from './components/Signin';
function App(props) {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/auth/signup' element={<Signup />} />
					<Route path='/auth/signin' element={<Signin />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
