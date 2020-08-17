import {
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
} from "./userActions";

const initialState = {
  categories: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
