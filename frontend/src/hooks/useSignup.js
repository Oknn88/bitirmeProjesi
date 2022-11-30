import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
	const [hata, setHata] = useState(null);
	const [yukleniyor, setYukleniyor] = useState(null);

	const { dispatch } = useAuthContext();

	const signup = async (email, password) => {
		setYukleniyor(true);
		setHata(null);

		const response = await fetch('http://localhost:3000/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const json = await response.json();

		if (!response.ok) {
			setYukleniyor(false);
			setHata(json.hata);
		}

		if (response.ok) {
			localStorage.setItem('kullanici', JSON.stringify(json));
			dispatch({ type: 'LOGIN', payload: json });
			setYukleniyor(false);
		}
	};

	return { signup, yukleniyor, hata };
};
