import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "../../Redux";

const DisplayListContent = (props) => {
  console.log(props.list);
  return (
    <div>
      <p>lista</p>
    </div>
  );
};

export default DisplayListContent;
