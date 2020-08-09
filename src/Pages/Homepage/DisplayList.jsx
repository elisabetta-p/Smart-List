import React from "react";
import { useSelector } from "react-redux";
import DisplayListContent from "./DisplayListContent";

const DisplayListHeader = (props) => {
  return (
    <div
      className="category-name-in-list category-name-in-homepage"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 className="list-name-homepage">{props.listName}</h2>
      <button className="button">Add item</button>
    </div>
  );
};

const DisplayList = () => {
  const selectedList = useSelector((store) => store.lists.listDisplayed);
  return (
    <div style={{ margin: "1.5rem" }}>
      <DisplayListHeader listName={selectedList.name} />
      <DisplayListContent list={selectedList} />
    </div>
  );
};

export default DisplayList;
