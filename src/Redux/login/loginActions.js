export const LOGIN = "LOGIN";

export const login = (username, password) => {
  // chiamata API per il login
  console.log("login");
  return {
    type: LOGIN,
    payload: username,
  };
};
