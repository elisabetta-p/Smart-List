import { LOAD_LISTS } from "./listsActions";

const initialState = {
  lists: [],
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LISTS:
      return {
        ...state,
        lists: [...action.payload],
      };
    default:
      return state;
  }
};

export default listsReducer;
