import {
  LOAD_LISTS,
  ADD_SHOPPING_LIST,
  GET_TODOS,
  ADD_TODOLIST,
} from "./listsActions";

const initialState = {
  shoppingLists: [],
  todoLists: [],
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
    default:
      return state;
  }
};

export default listsReducer;
