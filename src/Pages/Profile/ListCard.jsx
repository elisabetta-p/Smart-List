import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
//import { login } from "../Redux";
import { actions as notifActions } from "redux-notifications";
import Particles from "react-particles-js";
import { Link, useParams } from "react-router-dom";
import { findByLabelText } from "@testing-library/react";
import { motion } from "framer-motion";

const ListHeader = (props) => {
  return (
    <div
      className="list-header"
      onClick={() => {
        props.parentCallbackShowContent();
      }}
    >
      <div className="list-header-flex">
        <h2 className="list-title">List title</h2>
        <button className="button list-button">Edit</button>
      </div>
    </div>
  );
};

const ListContent = () => {
  return (
    <div className="list-content">
      <p>Banana</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="button add-item-button">Add item</button>
      </div>
    </div>
  );
};
const ListCard = () => {
  const [showContent, setShowContent] = useState(true);

  const handleShowContent = () => {
    console.log(showContent);
    setShowContent(!showContent);
  };
  return (
    <div className="container-list-card">
      <ListHeader parentCallbackShowContent={handleShowContent} />

      <motion.div
        animate={{
          opacity: showContent ? 1 : 0,
          height: showContent ? "auto" : "0",
        }}
        transition={{ duration: 0.3 }}
      >
        <ListContent />
      </motion.div>
    </div>
  );
};

export default ListCard;
