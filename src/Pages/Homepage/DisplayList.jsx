import React from "react";
import { useSelector } from "react-redux";
import DisplayListContent from "./DisplayListContent";
import { useModal } from "react-modal-hook";
import AddShoppingItem from "./Modals/AddShoppingItem";
import AddTodoItem from "./Modals/AddTodoItem";
import EditList from "./Modals/EditList";
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

  const [showEditList, hideEditList] = useModal(({ in: open, onExited }) => (
    <EditList open={open} onExited={onExited} onClose={hideEditList} />
  ));
  return (
    <div
      className="category-name-in-list category-name-in-homepage"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <h2 className="list-name-homepage">{props.listName}</h2>
      <span>
        <button className="button" onClick={showEditList}>
          Edit list
        </button>
        <button
          className="button"
          onClick={
            props.listType === "shopping"
              ? showAddShoppingItem
              : showAddTodoItem
          }
        >
          {props.listType === "shopping" ? (
            <span>Add item</span>
          ) : (
            <span>Add task</span>
          )}
        </button>
      </span>
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
