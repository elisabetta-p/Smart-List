import {
  LOAD_LISTS,
  CREATE_TODO_LIST,
  CREATE_SHOPPING_LIST,
} from "./listsActions";

const initialState = {
  lists: [],
  createShoppingList: false,
  createTodoList: false,
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
    default:
      return state;
  }
};

export default listsReducer;
