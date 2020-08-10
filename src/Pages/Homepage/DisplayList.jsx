import React from "react";
import { useSelector } from "react-redux";
import DisplayListContent from "./DisplayListContent";
import CreateList from "./Modals/CreateList";
import { useModal } from "react-modal-hook";
import AddShoppingItem from "./Modals/AddShoppingItem";
import AddTodoItem from "./Modals/AddTodoItem";
const DisplayListHeader = (props) => {
  const [
    showAddShoppingItem,
    hideAddShoppingItem,
  ] = useModal(({ in: open, onExited }) => (
    <AddShoppingItem
      open={open}
      onExited={onExited}
      onClose={hideAddShoppingItem}
    />
  ));

  const [
    showAddTodoItem,
    hideAddSTodoItem,
  ] = useModal(({ in: open, onExited }) => (
    <AddTodoItem open={open} onExited={onExited} onClose={hideAddSTodoItem} />
  ));
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
      <button
        className="button"
        onClick={
          props.listType === "shopping" ? showAddShoppingItem : showAddTodoItem
        }
      >
        Add item
      </button>
    </div>
  );
};

const DisplayList = () => {
  const selectedList = useSelector((store) => store.lists.listDisplayed);
  return (
    <div style={{ margin: "1.5rem" }}>
      <DisplayListHeader
        listName={selectedList.name}
        listType={selectedList.type}
        categories={selectedList.categories}
      />
      <DisplayListContent list={selectedList} />
    </div>
  );
};

export default DisplayList;
