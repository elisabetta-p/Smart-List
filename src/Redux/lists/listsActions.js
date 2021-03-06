export const LOAD_LISTS = "LOAD_LISTS";
export const ADD_SHOPPING_LIST = "CREATE_SHOPPING_LIST";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODOLIST = "ADD_TODOLIST";
export const CLEAN_LISTS = "CLEAN_LISTS";
export const CHANGE_CHECK_SHOPPING = "CHANGE_CHECK_SHOPPING";
export const CHANGE_CHECK_TODO = "CHANGE_CHECK_TODO";
export const GET_USERS = "GET_USERS";
export const LOAD_SHOPPING_LIST_IN_HOMEPAGE = "LOAD_SHOPPING_LIST_IN_HOMEPAGE";
export const LOAD_TODO_LIST_IN_HOMEPAGE = "LOAD_TODO_LIST_IN_HOMEPAGE";
export const CLEAR_DISPLAYED_LIST = "CLEAR_DISPLAYED_LIST";
export const ADD_ITEM_TO_SHOPPING_LIST = "ADD_ITEM_TO_SHOPPING_LIST";
export const ADD_NEW_CATEGORY_TO_LIST_DISPLAYED =
  "ADD_NEW_CATEGORY_TO_LIST_DISPLAYED";
export const CHECK_ITEM = "CHECK_ITEM";
export const DELETE_ITEM = "DELETE ITEM";
export const ADD_TASK = "ADD_TASK";
export const EDIT_DISPLAYED_LIST = "EDIT_DISPLAYED_LIST";
export const EDIT_SHOPPING_LIST = "EDIT_SHOPPING_LIST";
export const EDIT_TODO_LIST = "EDIT_TODO_LIST";

export const loadShoppingLists = () => {
  const lists = [
    {
      id: 0,
      name: "Cibo da comprare",
      items: [
        {
          id: 0,
          name: "zucchine",
          description: "molto buone",
          isFav: true,
          category: 0,
          isChecked: true,
        },
        {
          id: 1,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 2,
          name: "scalogno",
          description: "rubatissimo",
          isFav: false,
          category: 0,
          isChecked: false,
        },
        {
          id: 3,
          name: "scalogno",
          description: "rubatissimo",
          isFav: false,
          category: 0,
          isChecked: false,
        },
        {
          id: 4,
          name: "scalogno",
          description: "rubatissimo",
          isFav: false,
          category: 0,
          isChecked: false,
        },
        {
          id: 5,
          name: "giacca",
          description: "rubatissimo",
          isFav: false,
          category: 1,
          isChecked: false,
        },
        {
          id: 6,
          name: "cose 1",
          description: "rubatissimo",
          isFav: false,
          category: 2,
          isChecked: false,
        },
        {
          id: 7,
          name: "cose 2",
          description: "rubatissimo",
          isFav: true,
          category: 2,
          isChecked: false,
        },
      ],
      categories: [
        { value: 0, label: "Food" },
        { value: 1, label: "Clothes" },
        { value: 2, label: "Stuff" },
      ],
      sharedWith: ["prokkius", "boba"],
    },
    {
      id: 1,
      name: "Seconda lista",
      items: [],
      categories: [{ id: 0, label: "Food" }],
    },
    {
      id: 2,
      name: "AAA",
      categories: [
        { value: 0, label: "Food" },
        { value: 1, label: "Clothes" },
        { value: 2, label: "Stuff" },
      ],
      items: [
        {
          id: 0,
          name: "zucchine",
          description: "molto buone",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 1,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 2,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 3,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 4,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 5,
          name: "giacca",
          description: "rubatissimo",
          isFav: true,
          category: 1,
          isChecked: false,
        },
        {
          id: 6,
          name: "cose 1",
          description: "rubatissimo",
          isFav: true,
          category: 2,
          isChecked: false,
        },
        {
          id: 7,
          name: "cose 2",
          description: "rubatissimo",
          isFav: true,
          category: 2,
          isChecked: false,
        },
      ],
      sharedWith: [],
    },
    {
      id: 3,
      name: "BBB",
      categories: [{ value: 0, label: "Food" }],
      items: [
        {
          id: 0,
          name: "zucchine",
          description: "molto buone",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 1,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 2,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 3,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 4,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
      ],
      sharedWith: ["banana"],
    },
    {
      id: 4,
      name: "CCC",
      categories: [{ value: 0, label: "Food" }],
      items: [
        {
          id: 0,
          name: "zucchine",
          description: "molto buone",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 1,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 2,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 3,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
      ],
      sharedWith: [],
    },
    {
      id: 5,
      name: "DDD",
      categories: [
        { value: 0, label: "Food" },
        { value: 1, label: "Clothes" },
        { value: 2, label: "Stuff" },
      ],
      items: [
        {
          id: 0,
          name: "zucchine",
          description: "molto buone",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 1,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 2,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 3,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
        {
          id: 4,
          name: "scalogno",
          description: "rubatissimo",
          isFav: true,
          category: 0,
          isChecked: false,
        },
      ],
      sharedWith: [],
    },
  ];

  return {
    type: LOAD_LISTS,
    payload: [...lists],
  };
};

export const getTodoLists = () => {
  const todos = [
    {
      id: 0,
      name: "todo list 1",
      items: [
        {
          name: "nome 1",
          isFav: true,
          description: "descrizione",
          dueDate: new Date(2020, 8, 27, 10, 33, 30, 0),
          sharedWith: ["prokkius"],
          category: 0,
        },
      ],
      categories: [
        { value: 0, label: "Food" },
        { value: 1, label: "Clothes" },
      ],
    },
    {
      id: 1,
      name: "todo list 2",
      items: [],
      categories: [{ value: 0, label: "Food" }],
    },
  ];
  return {
    type: GET_TODOS,
    payload: [...todos],
  };
};

const addTodoList = (existingTodos, name, categories, sharingWith) => {
  const obj = {
    id: existingTodos.length,
    name: name,
    categories: [...categories],
    sharingWith: [...sharingWith],
    items: [],
  };
  existingTodos.push(obj);
  return {
    type: ADD_TODOLIST,
    payload: [...existingTodos],
  };
};

const addShoppingList = (
  existingShoppingLists,
  name,
  categories,
  sharingWith
) => {
  const obj = {
    id: existingShoppingLists.length,
    name: name,
    categories: [...categories],
    sharingWith: [...sharingWith],
    items: [],
  };
  existingShoppingLists.push(obj);

  return {
    type: ADD_SHOPPING_LIST,
    payload: [...existingShoppingLists],
  };
};

/**
 * It invokes the right function to add a new list according to the type of the list that is being added (@see addShoppingList and @see addTodoList)
 * @param {string} name name of the list
 * @param {string} typeOfList either shopping or todo
 * @param {[number]} categories array containing the ids of the categories selected by the user
 * @param {[]} sharingWith array containing the users the list is shared with
 */

export const addList = (name, typeOfList, categories, sharingWith) => {
  return (dispatch, getState) => {
    if (typeOfList === "shopping") {
      const existingLists = [...getState().lists.shoppingLists];
      dispatch(addShoppingList(existingLists, name, categories, sharingWith));
    } else if (typeOfList === "todo") {
      const existingLists = [...getState().lists.todoLists];
      dispatch(addTodoList(existingLists, name, categories, sharingWith));
    }
  };
};

export const cleanLists = () => {
  return {
    type: CLEAN_LISTS,
  };
};

export const checkItem = (itemId) => {
  return (dispatch, getState) => {
    // here there will also be an API call
    const newListDisplayed = { ...getState().lists.listDisplayed };
    newListDisplayed.items.forEach((item) => {
      if (item.id === itemId) {
        item.isChecked = !item.isChecked;
      }
    });
    dispatch({
      type: CHECK_ITEM,
      payload: { ...newListDisplayed },
    });
  };
};

export const getUsers = () => {
  const users = ["boba", "banana", "prokkius"];
  return {
    type: GET_USERS,
    payload: [...users],
  };
};

/**
 * Loads the right shopping list in the store so that the user can see it on their homnepace
 * @param {number}  listId id of the list
 * @param {Array} shoppingLists array of existing shopping lists
 * @returns the list object if found, otherwise undefined
 */
const loadShoppingList = (listId, shoppingLists) => {
  const rightList = shoppingLists.find((list) => list.id === listId);
  rightList.type = "shopping";
  if (rightList) {
    return {
      type: LOAD_SHOPPING_LIST_IN_HOMEPAGE,
      payload: { ...rightList },
    };
  }
};
/**
 * Loads the right todo list in the store so that the user can see it on their homepage
 * @param {number} listId id of the list
 * @param {Array} todoLists array of existing todo lists
 * @returns the list object if found, otherwise undefined
 */
const loadTodoList = (listId, todoLists) => {
  const rightList = todoLists.find((list) => list.id === listId);
  rightList.type = "todo";
  if (rightList) {
    return {
      type: LOAD_TODO_LIST_IN_HOMEPAGE,
      payload: { ...rightList },
    };
  }
};

/**
 * Loads a specific list in the store after the user clicked it from the sidebar.
 * This function is invoked after the user has clicked one of the lists on the homepage's sidebar. To load the correct list,
 * it invokes the right function: @see loadShoppingList() @see loadTodoList
 * @param {number} listId id of the list the user has chosen to display
 * @param {string} type type of list, whether it'' a shopping or a todo list
 */
export const loadSingleListInHomepage = (listId, type) => {
  return (dispatch, getState) => {
    // if listDisplayed is empty, we don't need to clean it
    const isAListAlreadySelected = { ...getState().lists.listDisplayed };
    if (
      Object.keys(isAListAlreadySelected).length !== 0 &&
      isAListAlreadySelected.constructor === Object
    ) {
      dispatch(clearDisplayedList());
    }
    if (type === "shopping") {
      const shoppingLists = [...getState().lists.shoppingLists];
      dispatch(loadShoppingList(listId, shoppingLists));
    }
    if (type === "todo") {
      const todoLists = [...getState().lists.todoLists];
      dispatch(loadTodoList(listId, todoLists));
    }
  };
};

const clearDisplayedList = () => {
  return {
    type: CLEAR_DISPLAYED_LIST,
  };
};
/**
 * Add an item to a shopping list.
 * @param {number} id list id
 * @param {string} name name of the item
 * @param {string} description description of the item
 * @param {boolean} isFav is favourite
 * @param {number }category
 */
export const addShoppingItem = (id, name, description, isFav, category) => {
  const newItem = {
    name,
    description,
    isFav,
    category,
  };
  return (dispatch, getState) => {
    const shoppingList = [...getState().lists.shoppingLists];
    const listDisplayed = { ...getState().lists.listDisplayed };
    listDisplayed.items = [...listDisplayed.items, newItem];
    shoppingList.forEach((list) => {
      if (list.id === id) {
        list.items = [...list.items, newItem];
      }
    });
    dispatch({
      type: ADD_ITEM_TO_SHOPPING_LIST,
      newShoppingList: [...shoppingList],
      newListDisplayed: { ...listDisplayed },
    });
  };
};

export const addCategoryToDisplayedList = (categoryName) => {
  return (dispatch, getState) => {
    const newListDisplayed = { ...getState().lists.listDisplayed };
    if (getState().lists.listDisplayed.categories) {
      newListDisplayed.categories = [
        ...getState().lists.listDisplayed.categories,
        { id: getState().user.categories.length, label: categoryName },
      ];
    } else {
      newListDisplayed.categories = [
        { id: getState().user.categories.length, label: categoryName },
      ];
    }
    dispatch({
      type: ADD_NEW_CATEGORY_TO_LIST_DISPLAYED,
      newListDisplayed: { ...newListDisplayed },
    });
  };
};

/**
 * Deletes an item from a shopping or a to do list, given the item id
 * @param {number} itemId
 * @param {string} typeOfList can be either "shopping" or "todo"
 * @returns {function(...[*]=)}
 */

export const deleteItem = (itemId, typeOfList) => {
  return (dispatch, getState) => {
    const listId = getState().lists.listDisplayed.id;
    var list = [];
    if (typeOfList === "shopping") {
      getState().lists.shoppingLists.forEach((shoppingList) => {
        if (shoppingList.id === listId) {
          list = shoppingList;
        }
      });
    }
  };
};

/**
 * Adds a task to a to do list
 * @param {string} name of the task
 * @param {boolean} isFav if the task is favourite or not
 * @param {string} description of the task
 * @param {number} category
 * @param {Date} dateAndTime
 * @param {String[]}sharedWith
 */

export const addTask = (
  name,
  isFav,
  description,
  category,
  dateAndTime,
  sharedWith
) => {
  const newTask = {
    name,
    isFav,
    description,
    category,
    dueDate: dateAndTime,
    sharedWith,
  };
  return (dispatch, getState) => {
    const todoDisplayed = { ...getState().lists.listDisplayed };
    const todoLists = [...getState().lists.todoLists];
    todoDisplayed.items = [...todoDisplayed.items, newTask];
    todoLists.forEach((list) => {
      if (list.id === todoDisplayed.id) {
        list.items = [...list.items, newTask];
      }
    });
    dispatch({
      type: ADD_TASK,
      newTodoList: [...todoLists],
      newListDisplayed: { ...todoDisplayed },
    });
  };
};

/**
 * Edits the list selected by the user
 * @param {number} listId
 * @param {string} newName
 * @param {number[]} newCategories
 * @param {string[]} newUsersItIsSharedWith
 * @param {string} listType can be "shopping" or "todo"
 * @returns {function(...[*]=)}
 */

export const editList = (
  listId,
  newName,
  newCategories,
  newUsersItIsSharedWith,
  listType
) => {
  return (dispatch, getState) => {
    //edit the displayed list
    const listDisplayed = { ...getState().lists.listDisplayed };
    if (newName && listDisplayed.name !== newName) {
      listDisplayed.name = newName;
    }
    if (newCategories) {
      listDisplayed.categories = [...newCategories];
    }
    if (newUsersItIsSharedWith) {
      const names = newUsersItIsSharedWith.map((user) => user.text);
      listDisplayed.sharedWith = [...names];
    }
    dispatch({
      type: EDIT_DISPLAYED_LIST,
      payload: { ...listDisplayed },
    });
    let listFromRedux = [];
    //edit the actual list
    if (listType === "shopping") {
      listFromRedux = getState().lists.shoppingLists;
    } else {
      listFromRedux = getState().lists.todoLists;
    }
    listFromRedux.forEach((list) => {
      if (list.id === listId) {
        if (newName && newName !== list.name) {
          list.name = newName;
        }
        if (newCategories) {
          list.categories = [...newCategories];
        }
        if (newUsersItIsSharedWith) {
          const names = newUsersItIsSharedWith.map((user) => user.text);
          list.sharedWith = [...names];
        }
      }
    });
    if (listType === "shopping")
      dispatch({
        type: EDIT_SHOPPING_LIST,
        payload: [...listFromRedux],
      });
    else if (listType === "todo") {
      dispatch({
        type: EDIT_TODO_LIST,
        payload: [...listFromRedux],
      });
    }
  };
};
