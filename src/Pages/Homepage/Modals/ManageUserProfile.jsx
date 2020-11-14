import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {} from "../../../Redux";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Select from "react-select";
import Accordion from "react-bootstrap/Accordion";
import ColorPicker from "../Utilities/ColorPicker";

const ManageUserProfile = ({ onClose, ...rest }) => {
  const [profileName, setProfileName] = useState(null);
  const { handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData, event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setProfileName(window.localStorage.getItem("username"));
  }, []);

  /**
   * Inside the props of SelectedListType I'm passing the type prop: this allows for a callback to save inside typeOfList the right type of list that is being created.
   */
  console.log(window.localStorage);
  if (profileName) {
    return (
      <Dialog
        {...rest}
        onClose={onClose}
        role="dialog"
        aria-labelledby="manage-categories-title"
        aria-describedby="manage-categories-content"
        aria-modal="true"
      >
        <div className="colorfulBg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle className="modal-title" id="manage-categories-title">
              <strong>Hello {profileName}! </strong>
            </DialogTitle>
            <DialogContent style={{ display: "flex", flexDirection: "column" }}>
              <input
                className="input input-new-item"
                placeholder="Change your username"
                style={{ margin: "1rem 0" }}
              />
              <input
                className="input input-new-item"
                placeholder="Change your email"
                style={{ margin: "1rem 0" }}
              />
              <input
                className="input input-new-item"
                placeholder="Change your password"
                style={{ margin: "1rem 0" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <input type="submit" className="button" value="Confirm" />
                <input type="submit" className="button" value="Cancel" />
              </div>
            </DialogContent>
          </form>
        </div>
      </Dialog>
    );
  } else {
    return (
      <Dialog
        {...rest}
        onClose={onClose}
        role="dialog"
        aria-labelledby="manage-categories-title"
        aria-describedby="manage-categories-content"
        aria-modal="true"
      >
        <div className="colorfulBg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle className="modal-title" id="manage-categories-title">
              <strong>Hello! </strong>
            </DialogTitle>
            <DialogContent id="manage-categories-content">
              <p>Loading...</p>
            </DialogContent>
          </form>
        </div>
      </Dialog>
    );
  }
};

export default ManageUserProfile;
