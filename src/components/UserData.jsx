import React from "react";

const UserData = ({ user }) => {
  const { id, fullName, lastName, email } = user;
  return (
    <tr key={id}>
      <td>{fullName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UserData;
