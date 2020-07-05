export const LOGIN = "LOGIN";

export const login = (username, password) => {
  // chiamata API per il login
  localStorage.setItem("username", username);
  return {
    type: LOGIN,
    payload: username,
  };
};
