import React, { useEffect, useState } from "react";
import {
  getCategories,
  loadShoppingLists,
  getTodoLists,
  cleanLists,
} from "../../Redux";
import Select from "react-select";
import { useSelector } from "react-redux";

const MenuListsHeader = (props) => {
  const listTypes = [
    { value: "shopping", label: "Show only shopping lists" },
    { value: "todo", label: "Show only to do lists" },
  ];

  const [filter, setFilter] = useState(null);

  useEffect(() => {
    props.filter(filter);
  }, [filter]);

  return (
    <div
      className="header-container"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <h2>Your lists</h2>
      <div style={{ width: "70%" }}>
        <Select
          options={listTypes}
          onChange={(event) => {
            setFilter(event.value);
          }}
        />
      </div>
    </div>
  );
};

const ShoppingLists = () => {
  const shoppingLists = useSelector((state) => state.lists.shoppingLists);
  return (
    <div>
      <h3>Shopping lists</h3>
      <ul>
        {shoppingLists.map((list) => (
          <li>{list.name}</li>
        ))}
      </ul>
    </div>
  );
};

const TodoLists = () => {
  const todoLists = useSelector((state) => state.lists.todoLists);
  return (
    <div>
      <h3>To do lists</h3>
      <ul>
        {todoLists.map((list) => (
          <li>{list.name}</li>
        ))}
      </ul>
    </div>
  );
};
const MenuLists = () => {
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <div className="menu-lists">
      <MenuListsHeader filter={setFilter} />
      <ShoppingLists />
      <TodoLists />
    </div>
  );
};

export default MenuLists;
