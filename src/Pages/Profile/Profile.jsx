// @flow

import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
//import { login } from "../Redux";
import { actions as notifActions } from "redux-notifications";
import Particles from "react-particles-js";
import { Link, useParams } from "react-router-dom";

const Profile = (_: void): React$Element<*> => {
  const { username } = useParams();
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
        <h1 className="hello">Hello, {localStorage.getItem("username")}</h1>
      </div>{" "}
    </div>
  );
};
export default Profile;
