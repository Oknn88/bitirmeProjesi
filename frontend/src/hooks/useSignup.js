export const useSignup = () => {
  const signup = async (email, password) => {
    const response = await fetch("http://localhost:3000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      return { okey: "okey" };
    }
  };

  return { signup };
};
