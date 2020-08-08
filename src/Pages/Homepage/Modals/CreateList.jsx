import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addList } from "../../../Redux";

import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Select from "react-select";
import ShareWithUsers from "../Utilities/ShareWithUsers";

const SelectListType = (props) => {
  const [selected, changeSelected] = useState(null);
  const listTypes = [
    { value: "shopping", label: "Shopping list" },
    { value: "todo", label: "Todo list" },
  ];

  /**
   * Callback to pass data from the child component SelectListType to parent component CreateList!
   * I used the useEffect hook that gets called every time *selected* changes, and it calls the type function inside the props.
   */

  const { type } = props;
  useEffect(() => {
    type(selected);
  }, [selected, type]);

  return (
    <div>
      <p className="text-modal">What kind of list is this?</p>
      <Select
        options={listTypes}
        onChange={(event) => {
          changeSelected(event.value);
        }}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        isSearchable
        menuPortalTarget={document.body}
        className="select-add-list"
        isClearable
      />
    </div>
  );
};

const SelectCategories = (props) => {
  const categoriesFromRedux = useSelector((state) => state.lists.categories);
  const [selectedCategories, setSelectedCategories] = useState([]);
  //const [categories, selectCategories] = useState([...categoriesFromRedux]);
  const reduxCategories = categoriesFromRedux.map((cat) => {
    const obj = { value: cat.id, label: cat.name };
    return obj;
  });
  /*useEffect(() => {
    console.log(selectedCategories);
	}, [selectedCategories]);

	* inside selectedCategories there are the ids of the categories that the user selected
	*/

  const { categories } = props;
  useEffect(() => {
    categories(selectedCategories);
  }, [selectedCategories, categories]);

  return (
    <div>
      <p className="text-modal">Select all the categories</p>
      <Select
        options={reduxCategories}
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

const CreateList = ({ createShoppingList, onClose, ...rest }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const existingShopppingListsNames = useSelector((state) =>
    state.lists.shoppingLists.map((list) => list.name)
  );
  const existingTodoListsNames = useSelector((state) =>
    state.lists.todoLists.map((list) => list.name)
  );
  // what kind of list is the user adding
  const [typeOfList, changeTypeOfList] = useState(null);
  //which categories
  const [categories, setCategories] = useState([]);
  // who is this shared with
  const [sharingWith, setSharingWith] = useState([]);
  // error: name already used
  const [errorListName, setErrorListName] = useState(null);
  // error a category wasnt selected
  const [errorTypeOfList, setErrorTypeOfList] = useState(null);

  useEffect(() => {
    if (!categories) setErrorTypeOfList("Seleziona delle categorie");
  }, [categories, typeOfList]);

  const onSubmit = (formData, event) => {
    event.preventDefault();
    console.log("onSubmit. type of list:", typeOfList);

    dispatch(addList(formData.name, typeOfList, categories, sharingWith));
  };

  function checkIfThereAreErrors() {
    let errors = false;
    if (document.getElementById("name").value === "") {
      setErrorListName("Please write a name");
      errors = true;
    }
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
        setErrorListName("A shopping list with this name already exists");
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
    <Dialog {...rest} onClose={onClose}>
      <div className="colorfulBg">
        <form
          onSubmit={
            !errorListName && !errorTypeOfList ? handleSubmit(onSubmit) : null
          }
        >
          <DialogTitle className="modal-title">
            <strong>Create a new list</strong>
          </DialogTitle>
          <DialogContent>
            <input
              id="name"
              type="text"
              name="name"
              label="name"
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
              className="input input-new-list"
            />
            <p className="error-message" style={{ marginBottom: "1rem" }}>
              {errorListName}
            </p>
            <SelectListType type={changeTypeOfList} />
            <p className="error-message" style={{ marginBottom: "1rem" }}>
              {errorTypeOfList}
            </p>
            <SelectCategories
              categories={setCategories}
              style={{ position: "relative", Index: "5000" }}
            />
            <ShareWithUsers users={setSharingWith} />
            <span style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="submit"
                className="button"
                value="Add the new list"
                onClick={(e) => {
                  const error = checkIfThereAreErrors();
                  if (error) e.preventDefault();
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

export default CreateList;
