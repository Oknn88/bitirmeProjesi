export const useEmailVerification = () => {
  const emailVerification = async (email, code) => {
    const response = await fetch(
      "http://localhost:3000/user/email-verificaction",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      return { hata: json.hata };
    }

    if (response.ok) {
      return { okey: "Verification successful" };
    }
  };
  return { emailVerification };
};
