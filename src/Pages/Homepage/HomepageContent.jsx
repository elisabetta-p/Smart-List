import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  loadShoppingLists,
  getTodoLists,
  cleanLists,
} from "../../Redux";
//import { ReactComponent as Image } from "../../img/undraw_conceptual_idea_xw7k.svg";
import DisplayList from "./DisplayList";

const ListNotSelected = (props) => {
  const loadRightText = () => {
    if (props.shoppingLists.length === 0 && props.todoLists.length === 0) {
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
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      {/*<Image style={{ width: "25vw" }} />*/}
      <div className="lds-heart">
        <div>{""}</div>
      </div>
      {loadRightText()}
    </span>
  );
};

const HomepageContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(loadShoppingLists());
    dispatch(getTodoLists());
    return () => {
      dispatch(cleanLists());
    };
  }, [dispatch]);

  const shoppingLists = useSelector((store) => store.lists.shoppingLists);
  const todoLists = useSelector((store) => store.lists.todoLists);
  const selectedList = useSelector((store) => store.lists.listDisplayed);

  return (
    <div style={{ width: "75vw" }}>
      {shoppingLists.length === 0 ||
      todoLists.length === 0 ||
      // checks if object is empty
      Object.keys(selectedList).length === 0 ? (
        <ListNotSelected shoppingLists={shoppingLists} todoLists={todoLists} />
      ) : (
        <DisplayList />
      )}
    </div>
  );
};
export default HomepageContent;
