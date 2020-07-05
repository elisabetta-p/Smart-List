import React, { useState } from "react";
//import { useSelector, useDispatch } from "react-redux";
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
        <h2 className="list-title">{props.list.name}</h2>
        <button className="button list-button">Edit</button>
      </div>
    </div>
  );
};

const ListContent = (props) => {
  return (
    <div
      className="list-content"
      style={{ height: props.showContent ? "10vh" : "0" }}
    >
      <p>Banana</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="button add-item-button">Add item</button>
      </div>
    </div>
  );
};
const ListCard = (props) => {
  const [showContent, setShowContent] = useState(true);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="container-list-card">
      <ListHeader
        parentCallbackShowContent={handleShowContent}
        list={props.list}
      />

      <motion.div
        animate={{
          opacity: showContent ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <ListContent showContent={showContent} />
      </motion.div>
    </div>
  );
};

export default ListCard;
