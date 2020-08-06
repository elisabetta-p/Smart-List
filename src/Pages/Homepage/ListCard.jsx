import React, { useState, useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import AddItemShoppingList from "./Modals/AddItemShoppingList";
import { useModal } from "react-modal-hook";
import {  getCategories } from "../../Redux";
import { useDispatch, useSelector } from "react-redux";

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
  const categories = useSelector((store) => store.lists.categories);
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

  const loadTheItems = (categoryId) => {
    return props.items.map((item, index) =>
      item.category === categoryId ? (
        <li key={index} style={{ marginBottom: "0.15rem" }}>
          {item.name}
        </li>
      ) : null
    );
  };

  const loadCategoryBoxes = (category) => {
    return (
      <div className="items-list">
        <p className="category-name-in-list">{category.name}</p>
        <ul className="scroll-items">{loadTheItems(category.id)}</ul>
      </div>
    );
  };

  return (
    <div className="list-content">
      {props.items.length !== 0 ? (
        categories.map((category) => loadCategoryBoxes(category))
      ) : (
        <p style={{ height: "3vh", margin: "0.5rem" }}>Add an item</p>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="button add-item-button"
          onClick={props.type === "shopping" ? showAddShoppingItem : null}
        >
          Add item
        </button>
      </div>
    </div>
  );
  /*
  return (
    <div className="list-content">
      {props.items.length !== 0 ? (
        <ul className="items-list">
          {categories.forEach((category) => (
            <ul>
              {props.items.map((item, index) =>
                item.category === category.id ? (
                  <React.Fragment>
                    <p>{category.name}</p>
                    <li key={index} style={{ marginBottom: "0.15rem" }}>
                      <input
                        type="radio"
                        checked={item.isChecked ? true : false}
                        onChange={() => {
                          dispatch(
                            changeCheck(props.items, item.id, props.type)
                          );
                        }}
                      />
                      {item.name}
                    </li>
                  </React.Fragment>
                ) : null
              )}
            </ul>
          ))}
        </ul>
      ) : (
        <p style={{ height: "3vh", margin: "0.5rem" }}>Add an item</p>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="button add-item-button"
          onClick={props.type === "shopping" ? showAddShoppingItem : null}
        >
          Add item
        </button>
      </div>
    </div>
  );*/
};

const ListCard = (props) => {
  const [showContent, setShowContent] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
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
          height: showContent ? "auto" : "0px",
          //display: showContent ? "auto" : "none",
        }}
        transition={{ duration: 0.25 }}
      >
        <ListContent
          showContent={showContent}
          type={props.type}
          items={props.list.items}
          type={props.type}
        />
      </motion.div>
      {/*<ListContent
        showContent={showContent}
        type={props.type}
        items={props.list.items}
        type={props.type}
      />*/}
    </div>
  );
};

export default ListCard;
