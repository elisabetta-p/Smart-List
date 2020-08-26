import React, { useEffect, useState } from "react";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import ShareWithUsers from "../Utilities/ShareWithUsers";

const SelectCategories = (props) => {
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [errorCategoryAlreadyExists, setError] = useState(null);
  const categoryNames = useSelector((store) => [
    ...store.user.categories.map((cat) => cat.name),
  ]);
  const dispatch = useDispatch();
  const userCategoriesLength = useSelector(
    (store) => store.user.categories.length
  );
  const categoriesFromRedux = useSelector((store) =>
    store.lists.listDisplayed.categories
      ? [...store.lists.listDisplayed.categories]
      : []
  );
  const categoriesInsideList = categoriesFromRedux.map((cat) => {
    return { value: cat.id, label: cat.label };
  });
  const { categories } = props;
  useEffect(() => {
    categories(selectedCategories);
  }, [selectedCategories, categories]);

  return (
    <div>
      <CreatableSelect
        placeholder="Select the category..."
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
  // what kind of list is the user adding
  //which categories
  const [categories, setCategories] = useState(null);
  // who is this shared with
  // error: name already used
  const [errorListName, setErrorListName] = useState(null);
  // error a category wasn't selected
  //const [errorTypeOfList, setErrorTypeOfList] = useState(null);

  const [isFav, setFav] = useState(false);

  const listId = useSelector((store) => store.lists.listDisplayed.id);
  const listName = useSelector((store) => store.lists.listDisplayed.name);
  const [startDate, setStartDate] = useState(
    //setHours(setMinutes(new Date(), 30), 17)
    null
  );

  const [sharingWith, setSharingWith] = useState([]);
  /*
  useEffect(() => {
    if (!categories) setErrorTypeOfList("Seleziona delle categorie");
  }, []);
  */
  const dispatch = useDispatch();
  const onSubmit = (formData, event) => {
    event.preventDefault();
    dispatch(
      addShoppingItem(
        listId,
        formData.name,
        formData.description,
        isFav,
        categories
      )
    );
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle className="modal-title">
            <strong>Add a new task to {listName}</strong>
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
                placeholder="Insert the name of the new task"
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
            <DatePicker
              selected={startDate}
              onChange={(event) => {
                setStartDate(event);
                console.log(event);
              }}
              showTimeSelect
              //minTime={setHours(setMinutes(new Date(), 0), 17)}
              //maxTime={setHours(setMinutes(new Date(), 30), 20)}
              dateFormat="MMMM d, yyyy h:mm aa"
              style={{
                position: "relative",
                zIndex: "9999",
              }}
              withPortal
              placeholderText="Select a due date and time"
              className="date-select input"
            />
            <ShareWithUsers users={setSharingWith} type="todo" />
            <span style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="submit"
                className="button"
                value="Add the new task"
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

export default AddShoppingItem;
