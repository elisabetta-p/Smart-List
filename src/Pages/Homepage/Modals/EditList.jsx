import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addList } from "../../../Redux";

import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Select from "react-select";
import ShareWithUsers from "../Utilities/ShareWithUsers";

const EditSelectedCategories = (props) => {
  const categoriesFromRedux = useSelector((state) => state.user.categories);

  //const [categories, selectCategories] = useState([...categoriesFromRedux]);
  const reduxCategories = categoriesFromRedux.map((cat) => {
    return { value: cat.id, label: cat.name };
  });
  const categoriesAlreadyAssociated = useSelector(
    (state) => state.lists.listDisplayed.categories
  );
  const defaultValues = categoriesAlreadyAssociated.map((cat) => {
    const obj = {
      value: cat.id,
      label: cat.label,
    };
    return { ...obj };
  });
  const [selectedCategories, setSelectedCategories] = useState([
    ...categoriesAlreadyAssociated,
  ]);

  const { categories } = props;
  useEffect(() => {
    categories(selectedCategories);
  }, [selectedCategories, categories]);

  return (
    <div>
      <Select
        defaultValue={defaultValues}
        id="choose-categories"
        options={reduxCategories}
        isMulti
        onChange={(event) => {
          setSelectedCategories([...event]);
        }}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        isSearchable
        menuPortalTarget={document.body}
        className="select-add-list"
        isClearable
      />{" "}
    </div>
  );
};

const EditList = ({ createShoppingList, onClose, ...rest }) => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const existingShopppingListsNames = useSelector((state) =>
    state.lists.shoppingLists.map((list) => list.name)
  );
  const existingTodoListsNames = useSelector((state) =>
    state.lists.todoLists.map((list) => list.name)
  );
  const listDisplayed = useSelector((store) => store.lists.listDisplayed);
  const [listName, setListName] = useState(null);
  // what kind of list is the user adding
  const [typeOfList, changeTypeOfList] = useState(null);
  //which categories
  const [categories, setCategories] = useState([]);
  // who is this shared with
  const [sharingWith, setSharingWith] = useState([]);
  // error: name already used
  const [errorListName, setErrorListName] = useState(null);
  // error: name length not right
  const [errorListNameLength, setErrorListNameLength] = useState(null);
  // error a category wasn't selected
  const [errorTypeOfList, setErrorTypeOfList] = useState(null);

  const listNameRef = useCallback((node) => {
    if (node !== null) {
      node.focus();
    }
  }, []);

  useEffect(() => {
    if (!categories) setErrorTypeOfList("Select at least one category");
  }, [categories, typeOfList]);

  useEffect(() => {
    if (listName === "") {
      setErrorListName("Please write a name");
    } else if (listName) {
      if (listName.length < 3) {
        setErrorListNameLength("List name is too short");
      }
      if (listName.length > 32) {
        setErrorListNameLength("List name is too long");
      }
      if (listName.length <= 32 && listName.length >= 3) {
        setErrorListNameLength(null);
      }
    }
  }, [listName]);

  const onSubmit = (formData, event) => {
    event.preventDefault();

    dispatch(addList(listName, typeOfList, categories, sharingWith));
  };

  /**
   * Called when the user clicks the button to confirm they want to add a new list.
   * Checks if:
   * 1. the user selected the type of list
   * 2. a list with that name already exists
   * @returns {boolean}
   */
  function checkIfThereAreErrors() {
    let errors = false;
    if (!typeOfList) {
      setErrorTypeOfList("Select a type of list to add");
      errors = true;
    }
    if (typeOfList === "shopping") {
      const alreadyThere = existingShopppingListsNames.includes(
        document.getElementById("name").value
      );
      if (alreadyThere) {
        setErrorListName("A shopping list with this name already exists");
        errors = true;
      } else if (!alreadyThere) {
        setErrorListName(null);
        errors = false;
      }
    }
    if (typeOfList === "todo") {
      const alreadyThere = existingTodoListsNames.includes(
        document.getElementById("name").value
      );
      if (alreadyThere) {
        setErrorListName("A todo list with this name already exists");
        errors = true;
      } else {
        setErrorListName(null);
        errors = false;
      }
    }
    return errors;
  }
  /**
   * Inside the props of SelectedListType I'm passing the type prop: this allows for a callback to save inside typeOfList the right type of list that is being created.
   */

  return (
    <Dialog
      {...rest}
      onClose={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="dialog-createlist-title"
      aria-describedby="dialog-createlist-desc"
    >
      <div className="colorfulBg">
        <form
          onSubmit={
            !errorListName && !errorTypeOfList && !errorListNameLength
              ? handleSubmit(onSubmit)
              : null
          }
        >
          <DialogTitle className="modal-title" id="dialog-createlist-title">
            <strong>Edit the list {listDisplayed.name}</strong>
          </DialogTitle>
          <DialogContent id="dialog-createlist-desc">
            <label htmlFor="name" style={{ display: "none" }}>
              New name for the list
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={`Insert the new name for ${listDisplayed.name}`}
              ref={listNameRef}
              className="input input-new-list"
              onChange={(event) => setListName(event.target.value)}
            />
            <p className="error-message" style={{ marginBottom: "1rem" }}>
              {errorListName}
            </p>
            <p className="error-message" style={{ marginBottom: "1rem" }}>
              {errorListNameLength}
            </p>
            <p className="error-message" style={{ marginBottom: "1rem" }}>
              {errorTypeOfList}
            </p>
            <label htmlFor="choose-categories" style={{ display: "none" }}>
              Edit the categories associated with this list
            </label>
            <EditSelectedCategories
              categories={setCategories}
              style={{ position: "relative", Index: "5000" }}
            />
            <label htmlFor="choose-users" style={{ display: "none" }}>
              Choose the users you want to share this list with (optional)
            </label>
            <ShareWithUsers users={setSharingWith} />
            <span style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="submit"
                className="button"
                value="Add the new list"
                onClick={(e) => {
                  const error = checkIfThereAreErrors();
                  if (error || errorListNameLength || errorListName)
                    e.preventDefault();
                  else onClose();
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

export default EditList;
