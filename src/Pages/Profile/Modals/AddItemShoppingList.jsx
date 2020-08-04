import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {} from "../../../Redux";

import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

const AddItemShoppingList = ({ createShoppingList, onClose, ...rest }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  /*const existingShopppingLists = useSelector(
    (state) => state.lists.shoppingLists
  );*/

  const onSubmit = (formData, event) => {
    event.preventDefault();
    //dispatch(addShoppingList(existingShopppingLists, formData.name));
  };
  return (
    <Dialog {...rest} onClose={onClose}>
      <div className="colorfulBg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add a shopping list</DialogTitle>
          <DialogContent>
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

export default AddItemShoppingList;
