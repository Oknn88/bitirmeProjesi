import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
	const { dispatch } = useAuthContext();

	const signup = async (email, password) => {
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

		console.log(json);
		if (!response.ok) {
			return { hata: json.hata };
		}

		if (response.ok) {
			localStorage.setItem('kullanici', JSON.stringify(json));
			dispatch({ type: 'LOGIN', payload: json });
		}
	};

	return { signup };
};
