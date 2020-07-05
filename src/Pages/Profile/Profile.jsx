// @flow

import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
//import { login } from "../Redux";
import { actions as notifActions } from "redux-notifications";
import Particles from "react-particles-js";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

const Profile = (_: void): React$Element<*> => {
  const { username } = useParams();
  return (
    <div className="profile-container">
      <Header />
    </div>
  );
};
export default Profile;
