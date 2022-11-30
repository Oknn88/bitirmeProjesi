import ToggleColorMode from './components/ToggleColorMode';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

function App() {
	const { kullanici } = useAuthContext();
	return (
		<>
			<ToggleColorMode />
			<div className='pages'>
				<Routes>
					<Route path='/' element={kullanici ? <Home /> : <Navigate to='/login' />} />
					<Route path='/login' element={!kullanici ? <Login /> : <Navigate to='/' />} />
					<Route path='/register' element={!kullanici ? <Signup /> : <Navigate to='/' />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
