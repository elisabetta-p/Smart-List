import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { HeartTwoTone } from "@ant-design/icons";
import { addShoppingItem, addNewCategory } from "../../../Redux";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Select from "react-select";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const EditCategory = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newName, setNewName] = useState(null);
  const categoriesFromRedux = useSelector((store) => [
    ...store.user.categories,
  ]);
  const categoriesInsideList = categoriesFromRedux.map((cat) => {
    return { value: cat.id, label: cat.name };
  });
  const { category, newCategoryName } = props;
  useEffect(() => {
    category(selectedCategory);
    newCategoryName(newName);
  }, [selectedCategory, category, newCategoryName]);

  return (
    <div>
      <Select
        options={categoriesInsideList}
        onChange={(event) => {
          setSelectedCategory(event.value);
        }}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        isSearchable
        menuPortalTarget={document.body}
        className="select-add-list"
        placeholder="Select the category you want to edit"
      />
      <input
        id="newName"
        type="text"
        name="newName"
        placeholder="Insert the new name"
        className="input input-new-item"
        style={{ margin: "0" }}
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
    </div>
  );
};

const ManageCategories = ({ createShoppingList, onClose, ...rest }) => {
  const { register, handleSubmit } = useForm();
  const [categories, setCategories] = useState(null);
  //edit the category name
  const [newName, setNewName] = useState(null);

  const dispatch = useDispatch();
  const onSubmit = (formData, event) => {
    event.preventDefault();
  };

  function checkIfThereAreErrors() {
    let errors = false;
    if (document.getElementById("name").value === "") {
      //setErrorListName("Please write a name");
      errors = true;
    }

    return errors;
  }
  /**
   * Inside the props of SelectedListType I'm passing the type prop: this allows for a callback to save inside typeOfList the right type of list that is being created.
   */

  return (
    <Dialog {...rest} onClose={onClose}>
      <div className="colorfulBg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle className="modal-title">
            <strong>Manage the categories</strong>
          </DialogTitle>
          <DialogContent>
            <Accordion
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Accordion.Toggle eventKey="0" className="button header-button ">
                Add a new category
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Insert the name of the new category"
                  className="input input-new-item"
                  style={{ margin: "0" }}
                />
              </Accordion.Collapse>
              <Accordion.Toggle eventKey="1" className="button header-button ">
                Edit an existing category
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <div>
                  <EditCategory
                    category={setCategories}
                    newCategoryName={setNewName}
                  />
                </div>
              </Accordion.Collapse>
              <Accordion.Toggle eventKey="2" className="button header-button ">
                Delete an existing category
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <div>Hello! I'm another body</div>
              </Accordion.Collapse>
            </Accordion>
            <span style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="submit"
                className="button"
                value="Confirm"
                onClick={(e) => {
                  const error = checkIfThereAreErrors();
                  if (error) e.preventDefault();
                  else {
                    onClose();
                  }
                }}
                style={{ display: "flex", justifyContent: "center" }}
              />
            </span>
          </DialogContent>
        </form>
      </div>
    </Dialog>
  );
};

export default ManageCategories;
