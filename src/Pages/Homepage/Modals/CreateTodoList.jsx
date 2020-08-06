import React from "react";
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

const CreateTodo = ({ createTodo, onClose, ...rest }) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const existingTodoLists = useSelector((state) => state.lists.todoLists);

  const onSubmit = (formData, event) => {
    event.preventDefault();
    dispatch(addTodoList(existingTodoLists, formData.name));
  };

  return (
    <Dialog {...rest} onClose={onClose}>
      <div className="colorfulBg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add a todo list</DialogTitle>
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

export default CreateTodo;
