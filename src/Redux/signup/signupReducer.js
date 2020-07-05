import { SIGNUP } from "./signupActions";

const initialState = {};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default signupReducer;
