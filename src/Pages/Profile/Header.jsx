import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
} from "@material-ui/core";
import { createShoppingList, createTodoList } from "../../Redux";

const Header = () => {
  const history = useHistory();
  const [showModal, hideModal] = useModal(({ in: open, onExited }) => {
    return (
      <Dialog open={open} onExited={onExited} onClose={hideModal}>
        <div className="colorfulBg">
          <DialogTitle>Create a list</DialogTitle>
          <DialogContent>
            <button class="button" onClick={useDispatch(createTodoList)}>
              Create to do list
            </button>
            <button class="button" onClick={useDispatch(createShoppingList)}>
              Create shopping
            </button>
          </DialogContent>
          <DialogActions>
            <Button onClick={hideModal}>close</Button>
          </DialogActions>
        </div>
      </Dialog>
    );
  });
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
            <button className="button" onClick={showModal}>
              Create list
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

export default Header;
