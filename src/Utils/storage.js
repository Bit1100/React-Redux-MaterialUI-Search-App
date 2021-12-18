export const getUsers = () => {
  const users = window.localStorage.getItem("UsersData");
  return JSON.parse(users);
};

export const setUsers = (usersData) => {
  window.localStorage.setItem("UsersData", JSON.stringify(usersData));
};
