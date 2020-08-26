import {
  LOAD_LISTS,
  ADD_SHOPPING_LIST,
  GET_TODOS,
  ADD_TODOLIST,
  CLEAN_LISTS,
  CHANGE_CHECK_TODO,
  CHANGE_CHECK_SHOPPING,
  GET_USERS,
  LOAD_SHOPPING_LIST_IN_HOMEPAGE,
  LOAD_TODO_LIST_IN_HOMEPAGE,
  CLEAR_DISPLAYED_LIST,
  ADD_ITEM_TO_SHOPPING_LIST,
  ADD_NEW_CATEGORY_TO_LIST_DISPLAYED,
  CHECK_ITEM,
  ADD_TASK,
} from "./listsActions";

const initialState = {
  shoppingLists: [],
  todoLists: [],
  //categories: [],
  users: [],
  listDisplayed: {},
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

    case CLEAN_LISTS:
      return {
        ...state,
        categories: [],
        todoLists: [],
        shoppingLists: [],
        listDisplayed: {},
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
    case LOAD_SHOPPING_LIST_IN_HOMEPAGE:
      return {
        ...state,
        listDisplayed: { ...action.payload },
      };
    case LOAD_TODO_LIST_IN_HOMEPAGE:
      return {
        ...state,
        listDisplayed: { ...action.payload },
      };
    case CLEAR_DISPLAYED_LIST:
      return {
        ...state,
        listDisplayed: {},
      };
    case ADD_ITEM_TO_SHOPPING_LIST:
      return {
        ...state,
        shoppingLists: [...action.newShoppingList],
        listDisplayed: { ...action.newListDisplayed },
      };
    case ADD_NEW_CATEGORY_TO_LIST_DISPLAYED:
      return {
        ...state,
        //categories: [...action.payload],
        listDisplayed: { ...action.newListDisplayed },
      };
    case CHECK_ITEM:
      return { ...state, listDisplayed: { ...action.payload } };
    case ADD_TASK:
      return {
        ...state,
        listDisplayed: { ...action.newListDisplayed },
        todoLists: [...action.newTodoList],
      };
    default:
      return state;
  }
};

export default listsReducer;
