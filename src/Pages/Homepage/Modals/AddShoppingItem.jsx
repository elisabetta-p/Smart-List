import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { HeartTwoTone } from "@ant-design/icons";

import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Select from "react-select";

const SelectCategories = (props) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categoriesFromRedux = useSelector((store) => [
    ...store.lists.listDisplayed.categories,
  ]);
  console.log(categoriesFromRedux);
  const categoriesInsideList = categoriesFromRedux.map((cat) => {
    return { value: cat.id, label: cat.label };
  });

  const { categories } = props;
  useEffect(() => {
    categories(selectedCategories);
  }, [selectedCategories, categories]);

  return (
    <div>
      <p className="text-modal">Select all the categories</p>
      <Select
        options={categoriesInsideList}
        isMulti
        onChange={(event) => {
          setSelectedCategories((selectedCategories) => [
            ...selectedCategories,
            event[event.length - 1].value,
          ]);
        }}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        isSearchable
        menuPortalTarget={document.body}
        className="select-add-list"
      />{" "}
    </div>
  );
};

const AddShoppingItem = ({ createShoppingList, onClose, ...rest }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // what kind of list is the user adding
  //which categories
  const [categories, setCategories] = useState([]);
  // who is this shared with
  // error: name already used
  const [errorListName, setErrorListName] = useState(null);
  // error a category wasn't selected
  const [errorTypeOfList, setErrorTypeOfList] = useState(null);

  const [isFav, setFav] = useState(false);

  useEffect(() => {
    if (!categories) setErrorTypeOfList("Seleziona delle categorie");
  }, [categories]);

  useEffect(() => {
    return () => {
      setCategories([]);
    };
  }, []);

  const onSubmit = (formData, event) => {
    event.preventDefault();

    //dispatch(addList(formData.name, , categories, sharingWith));
  };

  function checkIfThereAreErrors() {
    let errors = false;
    if (document.getElementById("name").value === "") {
      setErrorListName("Please write a name");
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
        <form
          onSubmit={
            !errorListName && !errorTypeOfList ? handleSubmit(onSubmit) : null
          }
        >
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
                ref={register({
                  required: {
                    value: true,
                    message: "Please insert a name",
                  },
                  minLength: {
                    value: 3,
                    message: "Name too short",
                  },
                  maxLength: {
                    value: 32,
                    message: "Name too long",
                  },
                })}
                className="input input-new-item"
                style={{ margin: "0" }}
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
              {errorListName}
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
                  if (error) e.preventDefault();
                  else {
                    setCategories([]);
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
