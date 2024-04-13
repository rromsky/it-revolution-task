export const registerUser = async (email, password) => {
  try {
    return await $api.post("/register", { email, password });
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = async (email, password) => {
  try {
    return await $api.post("/login", { email, password });
  } catch (e) {
    console.log(e);
  }
};

export const logoutUser = async () => {
  try {
    return localStorage.removeItem("token");
  } catch (e) {
    console.log(e);
  }
};

export const checkAuth = async () => {
  try {
    return localStorage.getItem("token");
  } catch (e) {
    console.log(e);
    return null;
  }
};
