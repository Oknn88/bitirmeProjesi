export const useChangePassword = () => {
  const changePassword = async (email, password, confirmPassword) => {
    const response = await fetch("http://localhost:3000/user/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, confirmPassword }),
    });

    const json = await response.json();

    if (!response.ok) {
      return { hata: json.hata };
    }
  };
  return { changePassword };
};
