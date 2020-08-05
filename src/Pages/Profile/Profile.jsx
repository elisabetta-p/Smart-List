// @flow

import React, { useEffect } from "react";
import Header from "./Header";
import ListContainer from "./ListContainer";
import { useDispatch } from "react-redux";
import {
  getCategories,
  loadShoppingLists,
  getTodoLists,
  cleanLists,
} from "../../Redux";
import MenuLists from "./MenuLists";

const Profile = (_: void): React$Element<*> => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(loadShoppingLists());
    dispatch(getTodoLists());
    return () => {
      dispatch(cleanLists());
    };
  }, []);

  return (
    <div className="profile-container">
      <Header />
      <div style={{ display: "flex", flexDirection: "row", width: "100vw" }}>
        <span style={{ width: "25vw" }}>
          <MenuLists />
        </span>
      </div>
    </div>
  );
};
export default Profile;
