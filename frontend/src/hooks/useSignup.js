import env from 'react-dotenv';

export const useSignup = () => {
	const signup = async (email, password) => {
		const response = await fetch(`http://${env.API_URL}/user/signup`, {
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
			return { hata: json.hata };
		}

		if (response.ok) {
			return { okey: 'okey' };
		}
	};

	return { signup };
};
