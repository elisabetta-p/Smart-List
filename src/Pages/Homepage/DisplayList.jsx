import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "../../Redux";

const DisplayList = () => {
  const selectedList = useSelector((store) => store.lists.listDisplayed);
  return <p>{selectedList.name}</p>;
};
export default DisplayList;
