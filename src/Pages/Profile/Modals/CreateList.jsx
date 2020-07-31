import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addList, getUsers } from "../../../Redux";
import { WithContext as ReactTags } from "react-tag-input";

import Particles from "react-particles-js";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
} from "@material-ui/core";
import makeAnimated from "react-select/animated";
import Select from "react-select";

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
  useEffect(() => {
    props.type(selected);
  }, [selected]);

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
  const categories = categoriesFromRedux.map((cat) => {
    const obj = { value: cat.id, label: cat.name };
    return obj;
  });
  /*useEffect(() => {
    console.log(selectedCategories);
	}, [selectedCategories]);

	* inside selectedCategories there are the ids of the categories that the user selected
	*/

  useEffect(() => {
    props.categories(selectedCategories);
  }, [selectedCategories]);
  return (
    <div>
      <p className="text-modal">Select all the categories</p>
      <Select
        options={categories}
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

const AddUsers = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const users = useSelector((state) => state.lists.users);
  const keyCodes = {
    comma: 188,
    enter: 13,
  };
  const delimiters = [keyCodes.comma, keyCodes.enter];
  // I have the tags in userTags
  const [userTags, setUserTags] = useState([...users]);
  const handleDelete = (i) => {
    const tags = userTags.filter((tag, index) => index !== i);
    setUserTags([...tags]);
  };
  const handleAddition = (tag) => {
    setUserTags((userTags) => [...userTags, tag]);
  };
  return (
    <div>
      <ReactTags
        tags={userTags}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        delimiters={delimiters}
      />
    </div>
  );
};

const CreateList = ({ createShoppingList, onClose, ...rest }) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const existingShopppingLists = useSelector(
    (state) => state.lists.shoppingLists
  );
  // what kind of list is the user adding
  const [typeOfList, changeTypeOfList] = useState(null);
  //which categories
  const [categories, setCategories] = useState([]);
  // who is this shared with
  const [sharingWith, setSharingWith] = useState([]);

  const onSubmit = (formData, event) => {
    event.preventDefault();
    dispatch(addList(formData.name, typeOfList, categories, sharingWith));
  };
  /*
  useEffect(() => {
    console.log("dentro a createlist", typeOfList, categories);
  }, [typeOfList]);
*/
  /**
   * Inside the props of SelectedListType I'm passing the type prop: this allows for a callback to save inside typeOfList the right type of list that is being created.
   */

  return (
    <Dialog {...rest} onClose={onClose}>
      <div className="colorfulBg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle className="modal-title">
            <strong>Create a new list</strong>
          </DialogTitle>
          <DialogContent>
            <input
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
            <SelectListType type={changeTypeOfList} />
            <SelectCategories
              categories={setCategories}
              style={{ position: "relative", Index: "5000" }}
            />
            <AddUsers />
            <span style={{ display: "flex", justifyContent: "center" }}>
              <input
                type="submit"
                className="button"
                value="Add todo list"
                onClick={onClose}
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
