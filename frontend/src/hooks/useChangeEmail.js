import { useAuthContext } from './useAuthContext';
import env from 'react-dotenv';

export const useChangeEmail = () => {
	const { dispatch } = useAuthContext();

	const changeEmail = async (lastEmail, email, confirmEmail) => {
		const response = await fetch(`http://${env.API_URL}/user/change-email`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ lastEmail, email, confirmEmail }),
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
	return { changeEmail };
};
