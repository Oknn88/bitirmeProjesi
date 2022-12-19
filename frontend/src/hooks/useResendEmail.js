export const useResendEmail = () => {
  const resendEmail = async (email) => {
    const response = await fetch("http://localhost:3000/user/email-resend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const json = await response.json();

    if (!response.ok) {
      return { hata: json.hata };
    }

    if (response.ok) {
      return { okey: "Emial resend" };
    }
  };
  return { resendEmail };
};
