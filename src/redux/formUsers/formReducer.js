import { ADD_USER, SORT_USERS, GET_USERS } from "./formConstant";

const initialState = {
  formUsers: [],
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        formUsers: [
          ...state.formUsers,
          {
            id: new Date().valueOf(),
            fullName: action.payload.fullName,
            lastName: action.payload.lastName,
            email: action.payload.email,
          },
        ],
      };

    case SORT_USERS:
      return {
        ...state,
        formUsers: action.payload.sortedUsers,
      };

    case GET_USERS:
      return {
        ...state,
        formUsers: action.payload.users,
      };

    default:
      return state;
  }
};
