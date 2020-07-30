import React, { useState } from "react";
//import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import AddItemShoppingList from "./Modals/AddItemShoppingList";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { changeCheck } from "../../Redux";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const [
    showAddShoppingItem,
    hideAddShoppingItem,
  ] = useModal(({ in: open, onExited }) => (
    <AddItemShoppingList
      open={open}
      onExited={onExited}
      onClose={hideAddShoppingItem}
    />
  ));
  return (
    <div
      className="list-content"
      style={{ height: props.showContent ? "10vh" : "0" }}
    >
      {props.items.length !== 0 ? (
        <ul>
          {" "}
          {props.items.map((item, index) => (
            <li key={index}>
              <input
                type="radio"
                checked={item.isChecked ? true : false}
                onChange={() => {
                  dispatch(changeCheck(props.items, item.id, props.type));
                }}
              />
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Add an item</p>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="button add-item-button"
          onClick={props.type === "shopping" ? showAddShoppingItem : null}
        >
          Add item
        </button>
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
      {/**
 *
      <motion.div
        animate={{
          opacity: showContent ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <ListContent
          showContent={showContent}
          type={props.type}
          items={props.list.items}
          type={props.type}
        />
      </motion.div>
 */}
      <ListContent
        showContent={showContent}
        type={props.type}
        items={props.list.items}
        type={props.type}
      />
    </div>
  );
};

export default ListCard;
