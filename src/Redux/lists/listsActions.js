export const LOAD_LISTS = "LOAD_LISTS";
export const ADD_SHOPPING_LIST = "CREATE_SHOPPING_LIST";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODOLIST = "ADD_TODOLIST";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CLEAN_LISTS = "CLEAN_LISTS";
export const CHANGE_CHECK_SHOPPING = "CHANGE_CHECK_SHOPPING";
export const CHANGE_CHECK_TODO = "CHANGE_CHECK_TODO";
export const GET_USERS = "GET_USERS";
export const LOAD_SHOPPING_LIST_IN_HOMEPAGE = "LOAD_SHOPPING_LIST_IN_HOMEPAGE";
export const LOAD_TODO_LIST_IN_HOMEPAGE = "LOAD_TODO_LIST_IN_HOMEPAGE";
export const CLEAR_DISPLAYED_LIST = "CLEAR_DISPLAYED_LIST";
export const ADD_ITEM_TO_SHOPPING_LIST = "ADD_ITEM_TO_SHOPPING_LIST";
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
        { id: 0, label: "Food" },
        { id: 1, label: "Clothes" },
        { id: 2, label: "Stuff" },
      ],
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
        { id: 0, label: "Food" },
        { id: 1, label: "Clothes" },
        { id: 2, label: "Stuff" },
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
    },
    {
      id: 3,
      name: "BBB",
      categories: [{ id: 0, label: "Food" }],
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
    },
    {
      id: 4,
      name: "CCC",
      categories: [{ id: 0, label: "Food" }],
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
    },
    {
      id: 5,
      name: "DDD",
      categories: [
        { id: 0, label: "Food" },
        { id: 1, label: "Clothes" },
        { id: 2, label: "Stuff" },
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
    },
  ];

  return {
    type: LOAD_LISTS,
    payload: [...lists],
  };
};

export const getTodoLists = () => {
  const todos = [
    { id: 0, name: "todo list 1", items: [] },
    { id: 1, name: "todo list 2", items: [] },
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

export const changeCheck = (itemsList, itemId, shoppingOrTodo) => {
  console.log(
    "cose che arrivano all'action ",
    itemsList,
    itemId,
    shoppingOrTodo
  );
  itemsList.forEach((element) => {
    if (element.id === itemId) {
      element.isChecked = !element.isChecked;
    }
  });
  if (shoppingOrTodo === "shopping")
    return {
      type: CHANGE_CHECK_SHOPPING,
      payload: [...itemsList],
    };
  else
    return {
      type: CHANGE_CHECK_TODO,
      payload: [...itemsList],
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
  console.log(id, name, description, isFav, category);
  const newItem = {
    name,
    description,
    isFav,
    category,
  };
  return (dispatch, getState) => {
    const shoppingList = [...getState().lists.shoppingLists];
    const listDisplayed = { ...getState().lists.listDisplayed };
    listDisplayed.items.push(newItem);
    shoppingList.forEach((list) => {
      if (list.id === id) {
        list.items = [...list.items, newItem];
      }
    });
    dispatch(executeAddShoppingItem([...shoppingList], { ...listDisplayed }));
  };
};

const executeAddShoppingItem = (newShoppingList, listDisplayed) => {
  return {
    type: ADD_ITEM_TO_SHOPPING_LIST,
    newShoppingList: [...newShoppingList],
    newListDisplayed: { ...listDisplayed },
  };
};
