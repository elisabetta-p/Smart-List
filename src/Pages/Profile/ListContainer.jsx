import React from "react";
import ListCard from "./ListCard";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

const ListContainer = () => {
  const lists = useSelector((state) => state.lists.shoppingLists);
  const todos = useSelector((state) => state.lists.todoLists);
  if (lists.length !== 0)
    return (
      <React.Fragment>
        <h1 className="list-container-title">Shopping</h1>

        <div className="list-container-row list-columns">
          {lists.map((list, index) => {
            let height = index % 2 === 0 ? 200 : 100;
            return (
              <ListCard
                list={list}
                key={index}
                type="shopping"
                className="card"
              />
            );
          })}
        </div>
        <h1 className="list-container-title">To do</h1>
        <div className="list-container-row list-columns">
          {todos.map((todo, index) => {
            let height = index % 2 === 0 ? 200 : 100;
            return (
              <ListCard list={todo} key={index} type="todo" className="card" />
            );
          })}
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
