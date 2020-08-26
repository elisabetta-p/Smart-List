export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const getCategories = () => {
  const categories = [
    { id: 0, name: "Food" },
    { id: 1, name: "Clothes" },
    { id: 2, name: "Stuff" },
    { id: 3, name: "AAA" },
  ];
  return {
    type: GET_CATEGORIES,
    payload: [...categories],
  };
};

/**
 * Adds new category to the user and also associates it to the list currently on display
 * @param {string} categoryName name of the new category
 * @returns {function(*): {payload: *[], type: string}}
 */

export const addNewCategory = (categoryName) => {
  return (dispatch, getState) => {
    /**
     * adding to all catergories in redux is useless.
     * I'll replace this with an api call to add this in the db
     */
    const allCategories = [
      ...getState().user.categories,
      { id: getState().user.categories.length, name: categoryName },
    ];
    //dispatch(addCategoryToDisplayedList(categoryName));
    dispatch({
      type: ADD_CATEGORY,
      payload: [...allCategories],
    });
  };
};

/**
 * Edits the name of an existing category
 * @param {number} id id of the category to edit
 * @param {string} newName new name of the category
 * @returns {function(...[*]=)}
 */
export const editCategory = (id, newName) => {
  return (dispatch, getState) => {
    const existingCategories = [...getState().user.categories];
    existingCategories.forEach((cat) => {
      if (cat.id === id) {
        cat.name = newName;
      }
    });
    dispatch({
      type: EDIT_CATEGORY,
      payload: [...existingCategories],
    });
  };
};

/**
 * Deletes an existing category
 * @param {number} id id of the category to delete
 * @returns {function(...[*]=)}
 */

export const deleteCategory = (id) => {
  return (dispatch, getState) => {
    const existingCategories = [...getState().user.categories];
    const filteredCategories = existingCategories.filter(
      (cat) => cat.id !== id
    );
    dispatch({
      type: DELETE_CATEGORY,
      payload: [...filteredCategories],
    });
  };
};
