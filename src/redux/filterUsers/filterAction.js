import { ADD_FILTER_USERS } from "./filterConstant";

// Action Creator Functions

export const filterUsers = (users) => ({
  type: ADD_FILTER_USERS,
  payload: {
    users,
  },
});
