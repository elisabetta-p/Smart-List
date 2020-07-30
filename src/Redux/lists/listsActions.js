export const LOAD_LISTS = "LOAD_LISTS";
export const ADD_SHOPPING_LIST = "CREATE_SHOPPING_LIST";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODOLIST = "ADD_TODOLIST";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const CLEAN_LISTS = "CLEAN_LISTS";
export const CHANGE_CHECK_SHOPPING = "CHANGE_CHECK_SHOPPING";
export const CHANGE_CHECK_TODO = "CHANGE_CHECK_TODO";

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

export const addTodoList = (existingTodos, name) => {
  const obj = {
    id: existingTodos.length,
    name: name,
    items: [],
  };
  existingTodos.push(obj);
  console.log("action", existingTodos);
  return {
    type: ADD_TODOLIST,
    payload: [...existingTodos],
  };
};

export const addShoppingList = (existingShoppingLists, name) => {
  const obj = {
    id: existingShoppingLists.length,
    name: name,
    items: [],
  };
  existingShoppingLists.push(obj);

  return {
    type: ADD_SHOPPING_LIST,
    payload: [...existingShoppingLists],
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
