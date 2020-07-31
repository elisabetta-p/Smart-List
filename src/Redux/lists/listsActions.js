export const LOAD_LISTS = "LOAD_LISTS";
export const ADD_SHOPPING_LIST = "CREATE_SHOPPING_LIST";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODOLIST = "ADD_TODOLIST";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CLEAN_LISTS = "CLEAN_LISTS";
export const CHANGE_CHECK_SHOPPING = "CHANGE_CHECK_SHOPPING";
export const CHANGE_CHECK_TODO = "CHANGE_CHECK_TODO";
export const GET_USERS = "GET_USERS";

export const getCategories = () => {
  const categories = [
    { id: 0, name: "Food" },
    { id: 1, name: "Clothes" },
    { id: 2, name: "Stuff" },
  ];
  return {
    type: GET_CATEGORIES,
    payload: [...categories],
  };
};
export const loadShoppingLists = () => {
  const lists = [
    {
      id: 1,
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
      ],
    },
    { id: 2, name: "Seconda lista", items: [] },
  ];

  return {
    type: LOAD_LISTS,
    payload: [...lists],
  };
};

export const getTodoLists = () => {
  const todos = [
    { id: 1, name: "todo list 1", items: [] },
    { id: 2, name: "todo list 2", items: [] },
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
  console.log(typeOfList);
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
