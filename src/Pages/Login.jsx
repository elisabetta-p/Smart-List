// @flow

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../Redux";
import Particles from "react-particles-js";
import { Link, useHistory } from "react-router-dom";

const Login = (_: void): React$Element<*> => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (formData) => {
    localStorage.setItem("username", formData.username);
    console.log(localStorage);
    dispatch(login(formData.username, formData.password));
    history.push(
      `/profile/${localStorage.getItem("username").toLocaleLowerCase()}`
    );
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
        <h1 className="hello">
          Hello{watch("username") ? `, ${watch("username")}` : null}
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
          <input type="submit" value="Login" className="button" />
          <Link to="/signup">
            <button className="button">Sign up</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
