// @flow

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signup } from "../Redux";
import Particles from "react-particles-js";
import { useHistory } from "react-router";

const Signup = (_: void): React$Element<*> => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const onSubmit = (formData) => {
    localStorage.setItem("username", formData.username);
    console.log(localStorage);
    dispatch(signup(formData.username, formData.email, formData.password));
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
        <h1 className="hello">
          Welcome{watch("username") ? `, ${watch("username")}` : null}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            name="username"
            placeholder="Insert your username"
            type="text"
            ref={register({
              required: { value: true, message: "Please insert your username" },
              minLength: { value: 3, message: "Username too short" },
              maxLength: { value: 32, message: "Username too long" },
            })}
            className="input"
          />
          <input
            name="email"
            placeholder="Insert your email"
            type="email"
            ref={register({
              required: { value: true, message: "Please insert your email" },
              /*pattern: {
                value: /S+@S+.S+/,
                message: "Email format not valid",
              },*/
            })}
            className="input"
          />
          <input
            name="password"
            placeholder="Insert your password"
            type="password"
            ref={register({
              required: { value: true, message: "Please insert your password" },
              minLength: { value: 3, message: "Password too short" },
              maxLength: { value: 32, message: "Password too long" },
            })}
            className="input"
          />

          {errors.username ? (
            <p className="error-message">{errors.username.message}</p>
          ) : null}
          {errors.password ? (
            <p className="error-message">{errors.password.message}</p>
          ) : null}
          {errors.email ? (
            <p className="error-message">{errors.email.message}</p>
          ) : null}
          <input type="submit" value="Confirm" className="button" />
          <button
            onClick={() => {
              history.goBack();
            }}
            className="button"
          >
            Go back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
