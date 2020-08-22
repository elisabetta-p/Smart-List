import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../Redux";
import Particles from "react-particles-js";
import { Link, useHistory } from "react-router-dom";

const Login = (_: void): React$Element<*> => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const usernameRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    if (username && password) setErrorMessage(null);
  }, [username, password]);

  const onSubmit = () => {
    localStorage.setItem("username", username);
    if (username && password && !errorMessage) {
      dispatch(login(username, password));
      history.push(
        `/profile/${localStorage.getItem("username").toLocaleLowerCase()}`
      );
    } else {
      setErrorMessage("Please insert username and password");
    }
  };

  return (
    <div className="login-container">
      <Particles
        width={`${window.innerWidth}px`}
        height={`${window.innerHeight}px`}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 5,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className="form-login-container">
        <h1 className="hello">Hello{username ? `, ${username}` : null}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            name="username"
            placeholder="Insert your username"
            type="text"
            ref={usernameRef}
            className="input"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />

          <input
            name="password"
            placeholder="Insert your password"
            type="password"
            className="input"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <p className="error-message">{errorMessage}</p>
          <input
            type="submit"
            value="Login"
            className="button"
            style={{ width: "5.5rem" }}
          />
          <Link to="/signup">
            <button className="button" style={{ width: "5.5rem" }}>
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
