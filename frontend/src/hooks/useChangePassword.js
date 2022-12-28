import env from 'react-dotenv';
export const useChangePassword = () => {
	const changePassword = async (email, password, confirmPassword) => {
		const response = await fetch(`http://${env.API_URL}/user/change-password`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password, confirmPassword }),
		});

		const json = await response.json();

		if (!response.ok) {
			return { hata: json.hata };
		}
	};
	return { changePassword };
};
