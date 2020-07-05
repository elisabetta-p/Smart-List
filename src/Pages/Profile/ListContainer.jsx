import React, { useEffect } from "react";
import ListCard from "./ListCard";
import { useSelector, useDispatch } from "react-redux";
import { loadLists } from "../../Redux";
import { LoadingOutlined } from "@ant-design/icons";

const ListContainer = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists.lists);
  useEffect(() => {
    dispatch(loadLists());
  }, []);
  console.log(lists);

  if (lists.length !== 0)
    return (
      <div className="list-container">
        {lists.map((list) => (
          <ListCard list={list} key={list.id} />
        ))}
      </div>
    );
  else return <LoadingOutlined />;
};

export default ListContainer;
