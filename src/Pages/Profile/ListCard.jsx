import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
//import { login } from "../Redux";
import { actions as notifActions } from "redux-notifications";
import Particles from "react-particles-js";
import { Link, useParams } from "react-router-dom";

const ListHeader = () => {
  return (
    <div className="list-header">
      <div className="list-header-flex">
        <h2 className="list-title">List title</h2>
      </div>
    </div>
  );
};

const ListContent = () => {
  return (
    <div className="list-content">
      <p>Banana</p>
    </div>
  );
};
const ListCard = () => {
  return (
    <div className="container-list-card">
      <ListHeader />
      <ListContent />
    </div>
  );
};

export default ListCard;
