import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTodoList, addShoppingList } from "../../Redux";

import Particles from "react-particles-js";
import { LogoutOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
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

const Header = () => {
  const history = useHistory();
  const [
    showCreateTodo,
    hideCreateTodo,
  ] = useModal(({ in: open, onExited }) => (
    <CreateTodo open={open} onExited={onExited} onClose={hideCreateTodo} />
  ));
  const [
    showCreateShoppingList,
    hideCreateShoppingList,
  ] = useModal(({ in: open, onExited }) => (
    <CreateShoppingList
      open={open}
      onExited={onExited}
      onClose={hideCreateShoppingList}
    />
  ));

  return (
    <div className="header-container">
      <Particles
        width={`${window.innerWidth}px`}
        height={`10vh`}
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className="content-header-container">
        <header>
          <span>
            <h1 className="hello-profile">
              Hello, {localStorage.getItem("username")}
            </h1>
          </span>
          <span className="header-right">
            <button className="button header-button" onClick={showCreateTodo}>
              Create todo list
            </button>
            <button
              className="button header-button"
              onClick={showCreateShoppingList}
            >
              Create shopping list
            </button>
            <LogoutOutlined
              className="header-icon"
              onClick={() => {
                localStorage.clear();
                history.push("/");
              }}
            />
          </span>
        </header>
      </div>{" "}
    </div>
  );
};

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

const CreateShoppingList = ({ createShoppingList, onClose, ...rest }) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const existingShopppingLists = useSelector(
    (state) => state.lists.shoppingLists
  );

  const onSubmit = (formData, event) => {
    event.preventDefault();
    dispatch(addShoppingList(existingShopppingLists, formData.name));
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

export default Header;
