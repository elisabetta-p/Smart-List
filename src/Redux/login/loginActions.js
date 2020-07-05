import axios from "axios";

export const LOGIN = "LOGIN";

const url = "http://localhost:9487";

export const login = (username, password) => {
  // chiamata API per il login
  localStorage.setItem("username", username);
  return (dispatch) => {
    const obj = {
      username,
      password,
    };
    axios
      .post(`${url}/users/login`, obj)
      .then((response) => {
        if (response) {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("userId", response.data.userId);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    return {
      type: LOGIN,
      payload: username,
    };
  };
};
