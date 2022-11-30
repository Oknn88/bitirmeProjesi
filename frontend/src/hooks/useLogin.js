import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
	const [hata, setHata] = useState(null);
	const [yukleniyor, setYukleniyor] = useState(null);

	const { dispatch } = useAuthContext();

	const login = async (vals) => {
		console.log(vals);
		setYukleniyor(true);
		setHata(null);
		const response = await fetch('http://localhost:3000/user/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...vals }),
		});

		const json = await response.json();

		if (response.ok) {
			localStorage.setItem('kullanici', JSON.stringify(json));
			dispatch({ type: 'LOGIN', payload: json });

			setYukleniyor(false);
		}
	};
	return { login, yukleniyor, hata };
};
