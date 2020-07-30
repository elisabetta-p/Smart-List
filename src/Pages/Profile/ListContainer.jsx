import React, { useEffect } from "react";
import ListCard from "./ListCard";
import { useSelector, useDispatch } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

const ListContainer = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists.shoppingLists);
  const todos = useSelector((state) => state.lists.todoLists);
  const categories = useSelector((state) => state.lists.categories);
  if (lists.length !== 0)
    return (
      <React.Fragment>
        <div className="list-container list-container-flex">
          <h1 className="list-container-title">Shopping</h1>
          <div className="cards">
            {lists.map((list, index) => (
              <ListCard list={list} key={index} type="shopping" />
            ))}
          </div>
        </div>
        <div className="list-container list-container-flex">
          <h1 className="list-container-title">To do</h1>
          <div className="cards">
            {todos.map((todo, index) => (
              <ListCard list={todo} key={index} type="todo" />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  else
    return (
      <div
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingOutlined className="loading-style" />
      </div>
    );
};

export default ListContainer;
