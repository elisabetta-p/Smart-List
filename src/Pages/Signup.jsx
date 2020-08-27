import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signup } from "../Redux";
import Particles from "react-particles-js";
import { useHistory } from "react-router";

const Signup = (_: void): React$Element<*> => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  const [errorUsername, setErrorUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const usernameRef = useRef();

  useEffect(() => {
    localStorage.clear();
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    if (email) {
      const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(String(email).toLowerCase())) {
        setErrorEmail("Email format not valid");
      } else {
        setErrorEmail(null);
      }
    }
  }, [email]);
  useEffect(() => {
    if (username) {
      if (username.length < 3)
        setErrorUsername("The chosen username is too short");
      if (username.length > 32)
        setErrorUsername("The chosen username is too long");
      if (username.length >= 3 && username.length <= 32) setErrorUsername(null);
    }
  }, [username]);
  useEffect(() => {
    if (password) {
      if (password.length < 3)
        setErrorPassword("The chosen password is too short");
      if (password.length > 32)
        setErrorPassword("The chosen password is too long");
      if (password.length >= 3 && password.length <= 32) setErrorPassword(null);
    }
  }, [password]);

  const onSubmit = () => {
    localStorage.setItem("username", username);
    dispatch(signup(username, email, password));
    history.push(
      `/profile/${localStorage.getItem("username").toLocaleLowerCase()}`
    );
  };
  const history = useHistory();
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
        <h1 className="hello">Welcome{username ? `, ${username}` : null}</h1>
        <form
          onSubmit={
            !errorUsername &&
            !errorEmail &&
            !errorPassword &&
            username &&
            password &&
            email
              ? handleSubmit(onSubmit)
              : null
          }
          className="form"
        >
          <input
            name="username"
            placeholder="Insert your username"
            type="text"
            ref={usernameRef}
            className="input"
            onChange={(event) => setUsername(event.target.value)}
          />
          <p className="error-message">{errorUsername}</p>
          <input
            name="email"
            placeholder="Insert your email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="input"
          />
          <p className="error-message">{errorEmail}</p>
          <input
            name="password"
            placeholder="Insert your password"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="input"
          />
          <p className="error-message">{errorPassword}</p>

          <input
            type="submit"
            value="Confirm"
            className="button"
            style={{ width: "5.5rem" }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              history.goBack();
            }}
            className="button"
            style={{ width: "5.5rem" }}
          >
            Go back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
