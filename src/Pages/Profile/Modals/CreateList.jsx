import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTodoList, addShoppingList } from "../../../Redux";

import Particles from "react-particles-js";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
} from "@material-ui/core";
import makeAnimated from "react-select/animated";
import Select from "react-select";

const SelectListType = (props) => {
  const [selected, changeSelected] = useState(null);
  const listTypes = [
    { value: "shopping", label: "Shopping list" },
    { value: "todo", label: "Todo list" },
  ];

  /**
   * Callback to pass data from the child component SelectListType to parent component CreateList!
   * I used the useEffect hook that gets called every time *selected* changes, and it calls the type function inside the props.
   */
  useEffect(() => {
    props.type(selected);
  }, [selected]);

  return (
    <Select
      options={listTypes}
      onChange={(event) => {
        changeSelected(event.value);
      }}
    />
  );
};

const CreateList = ({ createShoppingList, onClose, ...rest }) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const existingShopppingLists = useSelector(
    (state) => state.lists.shoppingLists
  );
  const [typeOfList, changeTypeOfList] = useState(null);

  const onSubmit = (formData, event) => {
    event.preventDefault();
    dispatch(addShoppingList(existingShopppingLists, formData.name));
  };

  /**
   * Inside the props of SelectedListType I'm passing the type prop: this allows for a callback to save inside typeOfList the right type of list that is being created.
   */
  return (
    <Dialog {...rest} onClose={onClose}>
      <div className="colorfulBg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Create a new list</DialogTitle>
          <DialogContent>
            <SelectListType type={changeTypeOfList} />
            <input
              type="text"
              name="name"
              label="name"
              placeholder="Insert the name of the new todo list"
              ref={register({
                required: { value: true, message: "Please insert a name" },
                minLength: { value: 3, message: "Name too short" },
                maxLength: { value: 32, message: "Name too long" },
              })}
              className="input"
            />
            <input
              type="submit"
              className="button"
              value="Add todo list"
              onClick={onClose}
            />
          </DialogContent>
        </form>
      </div>
    </Dialog>
  );
};

export default CreateList;
