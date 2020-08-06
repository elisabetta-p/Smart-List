import React, { useEffect, useState } from "react";
import { loadSingleListInHomepage } from "../../Redux";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

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
      {/*<div style={{ width: "70%" }}>
        <Select
          options={listTypes}
          onChange={(event) => {
            setFilter(event.value);
          }}
        />
        </div>*/}
    </div>
  );
};

const ShoppingLists = () => {
  const shoppingLists = useSelector((state) => state.lists.shoppingLists);
  const [showContent, setShowContent] = useState(true);
  const dispatch = useDispatch();
  return (
    <div>
      <h3
        className="category-name-in-list"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        Shopping lists
      </h3>
      <AnimatePresence>
        {showContent && (
          <motion.ul
            /*animate={{
          height: showContent ? "auto" : "0px",
        }}*/
            layout
            initial={{ opacity: 0, height: "0px" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: "0px" }}
            transition={{ duration: 0.35 }}
          >
            <motion.ul
              animate={{
                opacity: showContent ? 1 : 0,
              }}
              transition={{ duration: 0.15 }}
            >
              <ul className="scroll-items menu-items">
                {shoppingLists.map((list) => (
                  <li
                    className="menu-list-name menu-name-hover"
                    onClick={() => {
                      dispatch(loadSingleListInHomepage(list.id, "shopping"));
                    }}
                  >
                    {list.name}
                  </li>
                ))}
              </ul>
            </motion.ul>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const TodoLists = () => {
  const todoLists = useSelector((state) => state.lists.todoLists);
  const [showContent, setShowContent] = useState(true);
  const dispatch = useDispatch();
  return (
    <div>
      <h3
        className="category-name-in-list"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        To do lists
      </h3>
      <AnimatePresence>
        {showContent && (
          <motion.ul
            /*animate={{
          height: showContent ? "auto" : "0px",
        }}*/
            layout
            initial={{ opacity: 0, height: "0px" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: "0px" }}
            transition={{ duration: 0.35 }}
          >
            <motion.ul
              animate={{
                opacity: showContent ? 1 : 0,
              }}
              transition={{ duration: 0.15 }}
            >
              <ul className="scroll-items menu-items">
                {todoLists.map((list) => (
                  <li
                    className="menu-list-name menu-name-hover"
                    onClick={() => {
                      dispatch(loadSingleListInHomepage(list.id, "todo"));
                    }}
                  >
                    {list.name}
                  </li>
                ))}
              </ul>
            </motion.ul>
          </motion.ul>
        )}
      </AnimatePresence>
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
        <AnimateSharedLayout>
          <motion.ul layout initial={{ height: "auto" }}>
            <ShoppingLists />
            <TodoLists />
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </div>
  );
};

export default MenuLists;
