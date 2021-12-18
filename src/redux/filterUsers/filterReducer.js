import { ADD_FILTER_USERS } from "./filterConstant";

const initialState = {
  users: [],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER_USERS:
      return {
        ...state,
        users: action.payload.users,
      };

    default:
      return state;
  }
};
