export const LOAD_LISTS = "LOAD_LISTS";
export const CREATE_TODO_LIST = "CREATE_TODO_LIST";
export const CREATE_SHOPPING_LIST = "CREATE_SHOPPING_LIST";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODOLIST = "ADD_TODOLIST";

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

export const getTodoLists = () => {
  const todos = [
    { id: 1, name: "todo list 1", items: [] },
    { id: 1, name: "todo list 2", items: [] },
  ];
  return {
    type: GET_TODOS,
    payload: [...todos],
  };
};

export const addTodoList = (existingTodos, name) => {
  console.log("AAA", name);
  const obj = {
    id: existingTodos.length,
    name: name,
    items: {},
  };
  existingTodos.push(obj);
  console.log("action", existingTodos);
  return {
    type: ADD_TODOLIST,
    payload: [...existingTodos],
  };
};

export const createShoppingList = () => {
  return {
    type: CREATE_SHOPPING_LIST,
    payload: true,
  };
};
