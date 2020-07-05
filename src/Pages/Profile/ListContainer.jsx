import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { actions as notifActions } from "redux-notifications";
import { Link, useParams } from "react-router-dom";
import ListCard from "./ListCard";

const ListContainer = () => {
  return (
    <div className="list-container">
      <ListCard />
    </div>
  );
};

export default ListContainer;
