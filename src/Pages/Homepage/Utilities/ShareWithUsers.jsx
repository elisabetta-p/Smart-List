import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../Redux";
import { WithContext as ReactTags } from "react-tag-input";

const ShareWithUsers = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const existingUsers = useSelector((store) => store.lists.users);

  const alreadySharingWith = useSelector((store) => {
    if (props.newList) return [];
    else return store.lists.listDisplayed.sharedWith;
  });

  const keyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [keyCodes.comma, keyCodes.enter];

  // I have the tags in userTags
  const [userTags, setUserTags] = useState([]);

  //error if user does not exist
  const [errorUserDoesntExist, setErrorUser] = useState(null);

  const { users } = props;
  useEffect(() => {
    users(userTags);
    setErrorUser(null);
  }, [userTags, users]);

  useEffect(() => {
    if (alreadySharingWith) {
      const formattedExistingSharedUsers = alreadySharingWith.map((user) => {
        const obj = { id: user, text: user };
        return { ...obj };
      });
      setUserTags([...formattedExistingSharedUsers]);
    }
  }, []);

  const handleDelete = (i) => {
    const tags = userTags.filter((tag, index) => index !== i);
    setUserTags([...tags]);
  };

  const handleAddition = (tag) => {
    if (existingUsers.includes(tag.text))
      setUserTags((userTags) => [...userTags, tag]);
    else setErrorUser(`The user ${tag.text} does not exist`);
  };

  return (
    <div>
      {/*<p className="text-modal">Share with</p>*/}
      <span>
        <ReactTags
          id="choose-users"
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
            selected: "selected",
          }}
          allowDragDrop={false}
          inputFieldPosition="bottom"
          placeholder={
            props.type === "todo" ? "Share task with..." : "Share list with..."
          }
          autofocus={false}
        />
      </span>
      {errorUserDoesntExist ? (
        <p className="error-message">{errorUserDoesntExist}</p>
      ) : null}
    </div>
  );
};

export default ShareWithUsers;
