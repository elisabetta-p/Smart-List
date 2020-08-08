import React, { useState } from "react";
import { loadSingleListInHomepage } from "../../Redux";
//import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

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
                {shoppingLists.map((list, index) => (
                  <li
                    key={index}
                    className="menu-list-name"
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
                {todoLists.map((list, index) => (
                  <li
                    key={index}
                    className="menu-list-name"
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
  return (
    <div className="menu-lists">
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
