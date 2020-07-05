// @flow

import React from "react";
import Header from "./Header";
import ListContainer from "./ListContainer";

const Profile = (_: void): React$Element<*> => {
  return (
    <div className="profile-container">
      <Header />
      <ListContainer />
    </div>
  );
};
export default Profile;
