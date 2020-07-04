import { LOGIN } from "./loginActions";

const initialState = {
  username: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
