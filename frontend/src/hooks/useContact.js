import env from 'react-dotenv';
export const useContact = () => {
	const contact = async (vals) => {
		const response = await fetch(`http://${env.MAIL_SERVICE_URL}/contact"`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...vals }),
		});

		const json = await response.json();

		if (!response.ok) {
			return { hata: json.hata };
		}

		if (response.ok) {
			return { okey: 'Submit successful' };
		}
	};
	return { contact };
};
