import {
  LOAD_LISTS,
  ADD_SHOPPING_LIST,
  GET_TODOS,
  ADD_TODOLIST,
  GET_CATEGORIES,
  CLEAN_LISTS,
  CHANGE_CHECK_TODO,
  CHANGE_CHECK_SHOPPING,
  GET_USERS,
} from "./listsActions";

const initialState = {
  shoppingLists: [],
  todoLists: [],
  categories: [],
  users: [],
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LISTS:
      return {
        ...state,
        shoppingLists: [...action.payload],
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
    case ADD_SHOPPING_LIST:
      return {
        ...state,
        shoppingLists: [...action.payload],
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };
    case CLEAN_LISTS:
      return {
        ...state,
        categories: [],
        todoLists: [],
        shoppingLists: [],
      };
    case CHANGE_CHECK_SHOPPING:
      return {
        ...state,
        shoppingLists: [...action.payload],
      };
    case CHANGE_CHECK_TODO:
      return {
        ...state,
        todoLists: [...action.payload],
      };
    case GET_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    default:
      return state;
  }
};

export default listsReducer;
