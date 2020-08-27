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
  const categoryNames = useSelector((store) =>
    store.user.categories.map((category) => category.name)
  );
  const [errorNameModifiedCategory, setErrorModifiedCategory] = useState(null);
  const categoriesInsideList = categoriesFromRedux.map((cat) => {
    return { value: cat.id, label: cat.name };
  });
  const {
    category,
    editedCategoryName,
    idToEdit,
    errorModifiedCategory,
  } = props;
  useEffect(() => {
    category(selectedCategory);
    editedCategoryName(newName);
    errorModifiedCategory(errorNameModifiedCategory);
  }, [
    selectedCategory,
    category,
    editedCategoryName,
    idToEdit,
    newName,
    errorModifiedCategory,
    errorNameModifiedCategory,
  ]);

  return (
    <div className="select-manage-categories">
      <label htmlFor="select-edit-category" style={{ display: "none" }}>
        Select the category you want to edit
      </label>
      <Select
        id="select-edit-category"
        options={categoriesInsideList}
        onChange={(event) => {
          if (event) {
            setSelectedCategory(event.value);
          }
        }}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        isSearchable
        isClearable
        menuPortalTarget={document.body}
        className="select-add-list "
        placeholder="Select the category you want to edit"
      />
      <label htmlFor="newName" style={{ display: "none" }}>
        Write the new name for the selected category
      </label>
      <input
        id="newName"
        type="text"
        name="newName"
        placeholder="Insert the new name"
        className="input input-new-item"
        style={{ margin: "0" }}
        onChange={(event) => {
          if (categoryNames.includes(event.target.value)) {
            setErrorModifiedCategory(
              "A category with that name already exists"
            );
          } else {
            setErrorModifiedCategory(null);
            setNewName(event.target.value);
          }
        }}
      />
      <p className="error-message">{errorNameModifiedCategory}</p>
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
    <span>
      <label htmlFor="select-delete-category" style={{ display: "none" }}>
        Select the category you want to delete
      </label>
      <Select
        id="select-delete-category"
        options={categoriesInsideList}
        onChange={(event) => {
          if (event) {
            setSelectedCategory(event.value);
          }
        }}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        isSearchable
        isClearable
        menuPortalTarget={document.body}
        className="select-add-list"
        placeholder="Select the category you want to delete"
      />
    </span>
  );
};

const ManageCategories = ({ createShoppingList, onClose, ...rest }) => {
  const { handleSubmit } = useForm();

  const [newCategory, setNewCategory] = useState(null);
  const [errorCategoryAlreadyExists, setErrorCategoryAlreadyExists] = useState(
    null
  );
  //edit the category name
  const [newEditedName, setNewEditedName] = useState(null);
  const [idToEdit, setIdToEdit] = useState(null);
  const [errorModifiedCategory, setErrorModifiedCategory] = useState(null);
  // delete a category
  const [idToDelete, setIdToDelete] = useState(null);

  const dispatch = useDispatch();

  const categoryNames = useSelector((store) =>
    store.user.categories.map((cat) => cat.name)
  );

  const onSubmit = (formData, event) => {
    event.preventDefault();
    if (newCategory) {
      dispatch(addNewCategory(newCategory));
    }
    if (idToEdit) {
      dispatch(editCategory(idToEdit, newEditedName));
    }
    if (idToDelete) {
      dispatch(deleteCategory(idToDelete));
    }
  };

  /**
   * Inside the props of SelectedListType I'm passing the type prop: this allows for a callback to save inside typeOfList the right type of list that is being created.
   */

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
        <form
          onSubmit={
            errorCategoryAlreadyExists || errorModifiedCategory
              ? null
              : handleSubmit(onSubmit)
          }
        >
          <DialogTitle className="modal-title" id="manage-categories-title">
            <strong>Manage the categories</strong>
          </DialogTitle>
          <DialogContent id="manage-categories-content">
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
                  <label htmlFor="name" style={{ display: "none" }}>
                    Insert the name of the new category
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Insert the name of the new category"
                    className="input input-new-item"
                    style={{ margin: "0" }}
                    onChange={(event) => {
                      if (categoryNames.includes(event.target.value)) {
                        setErrorCategoryAlreadyExists(
                          "A category with that name already exists!"
                        );
                      } else {
                        setErrorCategoryAlreadyExists(null);
                        setNewCategory(event.target.value);
                      }
                    }}
                  />
                  <p className="error-message">{errorCategoryAlreadyExists}</p>
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
                    errorModifiedCategory={setErrorModifiedCategory}
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
                  if (!errorCategoryAlreadyExists && !errorModifiedCategory)
                    onClose();
                  else e.preventDefault();
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
