import {
  LOAD_LISTS,
  CREATE_TODO_LIST,
  CREATE_SHOPPING_LIST,
  GET_TODOS,
  ADD_TODOLIST,
} from "./listsActions";

const initialState = {
  lists: [],
  createShoppingList: false,
  createTodoList: false,
  todoLists: [],
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LISTS:
      return {
        ...state,
        lists: [...action.payload],
      };
    case CREATE_TODO_LIST:
      return {
        ...state,
        createTodoList: true,
        createShoppingList: false,
      };
    case CREATE_SHOPPING_LIST:
      return {
        ...state,
        createTodoList: false,
        createShoppingList: true,
      };
    case GET_TODOS:
      return {
        ...state,
        todoLists: [...action.payload],
      };
    case ADD_TODOLIST:
      return {
        ...state,
        todoLists: [...action.payload],
      };
    default:
      return state;
  }
};

export default listsReducer;
