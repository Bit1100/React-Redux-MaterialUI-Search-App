import { ADD_USER, SORT_USERS, GET_USERS } from "./formConstant";

// Action Creator Functions

export const getUsers = (users) => ({
  type: GET_USERS,
  payload: {
    users,
  },
});

export const addUsers = ({ fullName, lastName, email }) => ({
  type: ADD_USER,
  payload: {
    fullName,
    lastName,
    email,
  },
});

export const sortUsers = (users) => {
  // SOrting the users record in an ascending order
  users.sort((a, b) => {
    let x = a.fullName.toLowerCase();
    let y = b.fullName.toLowerCase();

    if (x < y) return -1;
    else if (y < x) return 1;
    return 0;
  });

  return {
    type: SORT_USERS,
    payload: {
      sortedUsers: users,
    },
  };
};
