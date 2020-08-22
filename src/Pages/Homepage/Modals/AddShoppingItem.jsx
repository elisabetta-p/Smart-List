import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { HeartTwoTone } from "@ant-design/icons";
import {
  addShoppingItem,
  addNewCategory,
  addCategoryToDisplayedList,
} from "../../../Redux";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import CreatableSelect from "react-select/creatable";

const SelectCategories = (props) => {
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [errorCategoryAlreadyExists, setError] = useState(null);
  const dispatch = useDispatch();
  const userCategoriesLength = useSelector(
    (store) => store.user.categories.length
  );
  const categoryNames = useSelector((store) => [
    ...store.user.categories.map((cat) => cat.name),
  ]);
  const categoriesFromRedux = useSelector((store) => [
    ...store.lists.listDisplayed.categories,
  ]);
  const categoriesInsideList = categoriesFromRedux.map((cat) => {
    return { value: cat.id, label: cat.label };
  });
  const { categories } = props;

  useEffect(() => {
    categories(selectedCategories);
  }, [selectedCategories, categories, categoryNames]);

  return (
    <div>
      <p className="text-modal">Select all the categories</p>
      <CreatableSelect
        options={categoriesInsideList}
        onChange={(event) => {
          if (event) {
            if (!event.__isNew__) setSelectedCategories(event.value);
            else {
              const alreadyThere = categoryNames.includes(event.label);
              if (!alreadyThere) {
                setError(null);
                dispatch(addNewCategory(event.label));
                dispatch(addCategoryToDisplayedList(event.label));
                setSelectedCategories(userCategoriesLength);
              } else {
                setError(
                  "A category with that name already exists! Please link it to this list, if needed."
                );
              }
            }
          }
        }}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        isSearchable
        isClearable
        menuPortalTarget={document.body}
        className="select-add-list"
      />
      <p className="error-message">{errorCategoryAlreadyExists}</p>
    </div>
  );
};

const AddShoppingItem = ({ createShoppingList, onClose, ...rest }) => {
  const { register, handleSubmit } = useForm();

  const [itemName, setItemName] = useState(null);
  const [categories, setCategories] = useState(null);
  const [errorItemName, setErrorItemName] = useState(null);
  const [errorItemNameLength, setErrorItemLength] = useState(null);
  const [isFav, setFav] = useState(false);

  const listId = useSelector((store) => store.lists.listDisplayed.id);

  const itemNameRef = useCallback((node) => {
    if (node !== null) {
      node.focus();
    }
  }, []);

  useEffect(() => {
    if (itemName) {
      if (itemName.length < 3) setErrorItemLength("The item name is too short");
      if (itemName.length > 32) setErrorItemLength("The item name is too long");
      if (itemName.length >= 3 && itemName.length <= 32)
        setErrorItemLength(null);
    }
  }, [itemName]);

  const dispatch = useDispatch();
  const onSubmit = (formData, event) => {
    event.preventDefault();
    dispatch(
      addShoppingItem(listId, itemName, formData.description, isFav, categories)
    );
  };

  function checkIfThereAreErrors() {
    let errors = false;
    if (document.getElementById("name").value === "") {
      setErrorItemName("Please write a name");
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
            <strong>Add a shopping item</strong>
          </DialogTitle>
          <DialogContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Insert the name of the new todo list"
                ref={itemNameRef}
                className="input input-new-item"
                style={{ margin: "0" }}
                onChange={(event) => {
                  setItemName(event.target.value);
                }}
              />
              <HeartTwoTone
                twoToneColor={isFav ? "#faaca8" : "#fff"}
                onClick={() => {
                  setFav(!isFav);
                }}
                style={{ marginLeft: "1rem", fontSize: "1.5em" }}
              />
            </div>
            <p className="error-message" style={{ marginBottom: "1rem" }}>
              {errorItemName}
            </p>
            <p className="error-message" style={{ marginBottom: "1rem" }}>
              {errorItemNameLength}
            </p>
            <textarea
              id="description"
              name="description"
              placeholder="Insert a description"
              ref={register({
                required: {
                  value: false,
                },
              })}
              className="input input-new-item input-description scroll-items"
            />
            <SelectCategories
              categories={setCategories}
              style={{ position: "relative", Index: "5000" }}
            />
            <span style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="submit"
                className="button"
                value="Add the new item"
                onClick={(e) => {
                  const error = checkIfThereAreErrors();
                  if (error && !errorItemNameLength) e.preventDefault();
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

export default AddShoppingItem;
