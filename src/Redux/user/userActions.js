export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const getCategories = () => {
  const categories = [
    { value: 0, name: "Food", color: "rgba(255, 61, 139, 0.5)" },
    { value: 1, name: "Clothes", color: "rgba(106, 255, 61, 0.5)" },
    { value: 2, name: "Stuff", color: "rgba(61, 155, 255,0.5)" },
    { value: 3, name: "AAA", color: "rgba(255, 216, 61, 0.5)" },
  ];
  return {
    type: GET_CATEGORIES,
    payload: [...categories],
  };
};

/**
 * Adds new category to the user and also associates it to the list currently on display
 * @param {string} categoryName name of the new category
 * @param {string} categoryColor color of the category
 * @returns {function(*): {payload: *[], type: string}}
 */

export const addNewCategory = (categoryName, categoryColor) => {
  return (dispatch, getState) => {
    /**
     * adding to all categories in redux is useless.
     * I'll replace this with an api call to add this in the db
     */
    const allCategories = [
      ...getState().user.categories,
      {
        value: getState().user.categories.length,
        name: categoryName,
        color: categoryColor,
      },
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
 * @param {string} categoryColor color of the category
 * @returns {function(...[*]=)}
 */
export const editCategory = (id, newName, categoryColor) => {
  return (dispatch, getState) => {
    const existingCategories = [...getState().user.categories];
    existingCategories.forEach((cat) => {
      if (cat.value === id) {
        if (newName) cat.name = newName;
        if (categoryColor) cat.category = categoryColor;
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
      (cat) => cat.value !== id
    );
    dispatch({
      type: DELETE_CATEGORY,
      payload: [...filteredCategories],
    });
  };
};
