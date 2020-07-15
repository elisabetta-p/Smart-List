export const LOAD_LISTS = "LOAD_LISTS";
export const CREATE_TODO_LIST = "CREATE_TODO_LIST";
export const CREATE_SHOPPING_LIST = "CREATE_SHOPPING_LIST";

export const loadLists = () => {
  const lists = [
    { id: 1, name: "Prima lista", items: [] },
    { id: 2, name: "Seconda lista", items: [] },
  ];

  return {
    type: LOAD_LISTS,
    payload: [...lists],
  };
};

export const createTodoList = () => {
  return {
    type: CREATE_TODO_LIST,
    payload: true,
  };
};

export const createShoppingList = () => {
  return {
    type: CREATE_SHOPPING_LIST,
    payload: true,
  };
};
