import { ADD_FILTER_USERS } from "./filterConstant";

// Action Creator Functions

export const filterUsers = (filteredUsers) => ({
  type: ADD_FILTER_USERS,
  payload: {
    users: filteredUsers,
  },
});
