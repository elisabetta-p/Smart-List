import {
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  GET_USER_DATA,
} from "./userActions";

const initialState = {
  categories: [],
  username: null,
  email: null,
  profilePic: null,
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
    case GET_USER_DATA:
      return {
        ...state,
        username: action.username,
        profilePic: action.profilePic,
        email: action.email,
      };
    default:
      return state;
  }
};

export default userReducer;
