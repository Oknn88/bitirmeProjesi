import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
	const { dispatch } = useAuthContext();

	const login = async (vals) => {
		const response = await fetch('http://{env.API_URL}/user/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...vals }),
		});

		const json = await response.json();

		if (!response.ok) {
			return { hata: json.hata };
		}

		if (response.ok) {
			localStorage.setItem('kullanici', JSON.stringify(json));
			dispatch({ type: 'LOGIN', payload: json });
		}
	};
	return { login };
};
