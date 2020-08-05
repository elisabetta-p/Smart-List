import React, { useEffect, useState } from "react";
import {
  getCategories,
  loadShoppingLists,
  getTodoLists,
  cleanLists,
} from "../../Redux";
import Select from "react-select";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const MenuListsHeader = (props) => {
  const listTypes = [
    { value: "shopping", label: "Show only shopping lists" },
    { value: "todo", label: "Show only to do lists" },
  ];

  const [filter, setFilter] = useState(null);

  useEffect(() => {
    props.filter(filter);
  }, [filter]);

  return (
    <div
      className="header-container"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadius: "10px",
      }}
    >
      <h2>Your lists</h2>
      <div style={{ width: "70%" }}>
        <Select
          options={listTypes}
          onChange={(event) => {
            setFilter(event.value);
          }}
        />
      </div>
    </div>
  );
};

const ShoppingLists = () => {
  const shoppingLists = useSelector((state) => state.lists.shoppingLists);
  const [showContent, setShowContent] = useState(true);
  return (
    <div>
      <h3
        className="category-name-in-list"
        onClick={() => {
          setShowContent(!showContent);
        }}
        style={{ cursor: "pointer" }}
      >
        Shopping lists
      </h3>
      <motion.div
        animate={{
          height: showContent ? "auto" : "0px",
        }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          animate={{
            opacity: showContent ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <ul className="scroll-items menu-items">
            {shoppingLists.map((list) => (
              <li className="menu-list-name menu-name-hover">{list.name}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

const TodoLists = () => {
  const todoLists = useSelector((state) => state.lists.todoLists);
  const [showContent, setShowContent] = useState(true);
  return (
    <div>
      <h3
        className="category-name-in-list"
        onClick={() => {
          setShowContent(!showContent);
        }}
        style={{ cursor: "pointer" }}
      >
        To do lists
      </h3>
      <motion.div
        animate={{
          height: showContent ? "auto" : "0px",
        }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          animate={{
            opacity: showContent ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <ul className="scroll-items">
            {todoLists.map((list) => (
              <li className="menu-list-name menu-name-hover">{list.name}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};
const MenuLists = () => {
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <div className="menu-lists">
      <MenuListsHeader filter={setFilter} />
      <div className="menu-lists-container">
        <ShoppingLists />
        <TodoLists />
      </div>
    </div>
  );
};

export default MenuLists;
