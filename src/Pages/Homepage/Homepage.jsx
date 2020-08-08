// @flow

import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import {
  getCategories,
  loadShoppingLists,
  getTodoLists,
  cleanLists,
} from "../../Redux";
import MenuLists from "./MenuLists";
import HomepageContent from "./HomepageContent";

const Homepage = (_: void): React$Element<*> => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(loadShoppingLists());
    dispatch(getTodoLists());
    return () => {
      dispatch(cleanLists());
    };
  }, [dispatch]);

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
        <div style={{ width: "25vw", maxWidth: "25vw" }}>
          <MenuLists />
        </div>
        <HomepageContent />
      </div>
    </div>
  );
};
export default Homepage;
