import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addNewCategory, deleteCategory, editCategory } from "../../../Redux";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Select from "react-select";
import Accordion from "react-bootstrap/Accordion";

const EditCategory = (props) => {
  // selectedCategory contains the id of the category selected
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newName, setNewName] = useState(null);
  const categoriesFromRedux = useSelector((store) => [
    ...store.user.categories,
  ]);
  const categoriesInsideList = categoriesFromRedux.map((cat) => {
    return { value: cat.id, label: cat.name };
  });
  const { category, editedCategoryName, idToEdit } = props;
  useEffect(() => {
    category(selectedCategory);
    editedCategoryName(newName);
  }, [selectedCategory, category, editedCategoryName, idToEdit, newName]);

  return (
    <div className="select-manage-categories">
      <Select
        options={categoriesInsideList}
        onChange={(event) => {
          setSelectedCategory(event.value);
        }}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        isSearchable
        menuPortalTarget={document.body}
        className="select-add-list "
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
          console.log(event.target.value);
          setNewName(event.target.value);
          console.log(newName);
        }}
      />
    </div>
  );
};

const DeleteCategory = (props) => {
  // selectedCategory contains the id of the category selected
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoriesFromRedux = useSelector((store) => [
    ...store.user.categories,
  ]);
  const categoriesInsideList = categoriesFromRedux.map((cat) => {
    return { value: cat.id, label: cat.name };
  });
  const { category } = props;
  useEffect(() => {
    category(selectedCategory);
  }, [selectedCategory, category]);

  return (
    <Select
      options={categoriesInsideList}
      onChange={(event) => {
        setSelectedCategory(event.value);
      }}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      isSearchable
      menuPortalTarget={document.body}
      className="select-add-list"
      placeholder="Select the category you want to delete"
    />
  );
};

const ManageCategories = ({ createShoppingList, onClose, ...rest }) => {
  const { handleSubmit } = useForm();

  const [newCategory, setNewCategory] = useState(null);
  //edit the category name
  const [newEditedName, setNewEditedName] = useState(null);
  const [idToEdit, setIdToEdit] = useState(null);
  // delete a category
  const [idToDelete, setIdToDelete] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(idToDelete);
  }, [idToDelete]);

  const onSubmit = (formData, event) => {
    event.preventDefault();
    if (newCategory) {
      dispatch(addNewCategory(newCategory));
    }
    if (idToEdit) {
      dispatch(editCategory(idToEdit, newEditedName));
    }
    if (idToDelete) {
      console.log("s");
      dispatch(deleteCategory(idToDelete));
    }
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
                <div className="select-manage-categories">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Insert the name of the new category"
                    className="input input-new-item"
                    style={{ margin: "0" }}
                    onChange={(event) => {
                      setNewCategory(event.target.value);
                    }}
                  />
                </div>
              </Accordion.Collapse>
              <Accordion.Toggle eventKey="1" className="button header-button ">
                Edit an existing category
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <div>
                  {/*category contains the id of the category i'm editing*/}
                  <EditCategory
                    category={setIdToEdit}
                    editedCategoryName={setNewEditedName}
                  />
                </div>
              </Accordion.Collapse>
              <Accordion.Toggle eventKey="2" className="button header-button ">
                Delete an existing category
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <div className="select-manage-categories">
                  <DeleteCategory category={setIdToDelete} />
                </div>
              </Accordion.Collapse>
            </Accordion>
            <span style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="submit"
                className="button"
                value="Confirm"
                onClick={(e) => {
                  /*const error = checkIfThereAreErrors();
                  if (error) e.preventDefault();
                  else {*/
                  onClose();
                  //}
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
