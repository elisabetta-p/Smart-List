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
      <ListContainer />
    </div>
  );
};
export default Profile;
