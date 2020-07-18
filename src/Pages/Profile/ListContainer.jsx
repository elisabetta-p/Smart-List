import React, { useEffect } from "react";
import ListCard from "./ListCard";
import { useSelector, useDispatch } from "react-redux";
import { loadLists, getTodoLists } from "../../Redux";
import { LoadingOutlined } from "@ant-design/icons";

const ListContainer = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists.lists);
  const todos = useSelector((state) => state.lists.todoLists);
  useEffect(() => {
    dispatch(loadLists());
    dispatch(getTodoLists());
  }, []);
  console.log(lists);

  if (lists.length !== 0)
    return (
      <React.Fragment>
        <div className="list-container list-container-flex">
          <h1 className="list-container-title">Shopping</h1>
          <div className="cards">
            {lists.map((list) => (
              <ListCard list={list} key={list.id} />
            ))}
          </div>
        </div>
        <div className="list-container list-container-flex">
          <h1 className="list-container-title">Todo</h1>
          <div className="cards">
            {todos.map((todo) => (
              <ListCard list={todo} key={todo.id} />
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
