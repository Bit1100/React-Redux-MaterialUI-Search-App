export const getUsers = () => {
  const users = window.localStorage.getItem("usersData");
  return JSON.parse(users);
};

export const setUsers = (usersData) => {
  window.localStorage.setItem("usersData", JSON.stringify(usersData));
};
