// @flow

import React, { useEffect } from "react";
import Header from "./Header";
import ListContainer from "./ListContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  loadShoppingLists,
  getTodoLists,
  cleanLists,
} from "../../Redux";
import MenuLists from "./MenuLists";
import { ReactComponent as Image } from "../../img/undraw_conceptual_idea_xw7k.svg";

const Homepage = (_: void): React$Element<*> => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(loadShoppingLists());
    dispatch(getTodoLists());
    return () => {
      dispatch(cleanLists());
    };
  }, []);

  const shoppingLists = useSelector((store) => store.lists.shoppingLists);
  const todoLists = useSelector((store) => store.lists.todoLists);

  const loadRightText = () => {
    if (shoppingLists.length === 0 && todoLists.length === 0) {
      return (
        <h1 style={{ color: "#ddd6f3", textShadow: " 0 0 20px #ddd6f3" }}>
          Create a list to start
        </h1>
      );
    } else {
      return (
        <h1
          style={{
            color: "#ddd6f3",
            textShadow: "0 0 20px rgba(221,214,243,0.7)",
          }}
        >
          Select a list to start
        </h1>
      );
    }
  };

  return (
    <div className="profile-container">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          maxHeight: "100vh",
        }}
      >
        <span style={{ width: "25vw" }}>
          <MenuLists />
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Image style={{ width: "25vw" }} />
          {loadRightText()}
        </span>
      </div>
    </div>
  );
};
export default Homepage;
