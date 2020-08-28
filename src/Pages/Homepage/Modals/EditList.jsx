import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { editList } from "../../../Redux";

import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Select from "react-select";
import ShareWithUsers from "../Utilities/ShareWithUsers";

const EditSelectedCategories = (props) => {
  const reduxCategories = useSelector((state) =>
    state.user.categories.map((cat) => {
      return { value: cat.value, label: cat.name };
    })
  );

  //const [categories, selectCategories] = useState([...categoriesFromRedux]);

  const categoriesAlreadyAssociated = useSelector(
    (state) => state.lists.listDisplayed.categories
  );

  const defaultValues = categoriesAlreadyAssociated.map((cat) => {
    return { value: cat.value, label: cat.label };
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
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9998 }) }}
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

  const onSubmit = () => {
    dispatch(
      editList(
        listDisplayed.id,
        listName,
        categories,
        sharingWith,
        listDisplayed.type
      )
    );
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                value={`Edit ${listDisplayed.name}`}
                onClick={(e) => {
                  onClose();
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
