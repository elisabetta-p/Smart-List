import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../Redux";
import { WithContext as ReactTags } from "react-tag-input";

const ShareWithUsers = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const users = useSelector((state) => state.lists.users);
  const keyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [keyCodes.comma, keyCodes.enter];
  // I have the tags in userTags
  const [userTags, setUserTags] = useState([...users]);

  useEffect(() => {
    props.users(userTags);
  }, [userTags]);

  const handleDelete = (i) => {
    const tags = userTags.filter((tag, index) => index !== i);
    setUserTags([...tags]);
  };
  const handleAddition = (tag) => {
    setUserTags((userTags) => [...userTags, tag]);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      <p className="text-modal">Share with</p>
      <span style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ReactTags
          tags={userTags}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          delimiters={delimiters}
          allowUnique={true}
          classNames={{
            tagInputField: "input input-new-list",
            tag: "tag",
            tagInput: "tagInput",
            tags: "tags",
            remove: "removeTag",
          }}
        />
      </span>
    </div>
  );
};

export default ShareWithUsers;
