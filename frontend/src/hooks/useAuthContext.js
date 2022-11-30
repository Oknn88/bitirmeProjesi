import { AuthContext } from '../contexts/authContext';
import { useContext } from 'react';

export const useAuthContext = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('context yuklenmedi');
	}

	return context;
};
