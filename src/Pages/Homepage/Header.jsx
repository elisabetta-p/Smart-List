import React from "react";

import Particles from "react-particles-js";
import { LogoutOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { useModal } from "react-modal-hook";
import CreateList from "./Modals/CreateList";
import ManageCategories from "./Modals/ManageCategories";
import ManageUserProfile from "./Modals/ManageUserProfile";

const Header = () => {
  const history = useHistory();
  const [
    showCreateList,
    hideCreateList,
  ] = useModal(({ in: open, onExited }) => (
    <CreateList
      open={open}
      onExited={onExited}
      onClose={hideCreateList}
      newList={true}
    />
  ));
  const [
    showManageCategories,
    hideManageCategories,
  ] = useModal(({ in: open, onExited }) => (
    <ManageCategories
      open={open}
      onExited={onExited}
      onClose={hideManageCategories}
    />
  ));

  const [
    showYourProfile,
    hideShowYourProfile,
  ] = useModal(({ in: open, onExited }) => (
    <ManageUserProfile
      open={open}
      onExited={onExited}
      onClose={hideShowYourProfile}
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
            <button
              className="button header-button"
              onClick={showManageCategories}
            >
              Manage the categories
            </button>
            <button className="button header-button" onClick={showCreateList}>
              Create a new list
            </button>
            <button className="button header-button" onClick={showYourProfile}>
              Manage your profile
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
