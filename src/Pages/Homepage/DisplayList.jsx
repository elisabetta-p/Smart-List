import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "../../Redux";
import DisplayListContent from "./DisplayListContent";

const DisplayListHeader = (props) => {
  return (
    <div
      className="category-name-in-list category-name-in-homepage"
      style={{ margin: "1.5rem" }}
    >
      <h2 className="list-name-homepage">{props.listName}</h2>
    </div>
  );
};

const DisplayList = () => {
  const selectedList = useSelector((store) => store.lists.listDisplayed);
  return (
    <div>
      <DisplayListHeader listName={selectedList.name} />
      <DisplayListContent list={selectedList} />
    </div>
  );
};

export default DisplayList;
