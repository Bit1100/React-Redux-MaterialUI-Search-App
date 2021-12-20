import UserData from "./UserData";
import { useDispatch, useSelector } from "react-redux";
import { sortUsers } from "../redux";

const Table = () => {
  const dispatch = useDispatch();
  const formUsers = useSelector((state) => state.form.formUsers);
  const filteredUsers = useSelector((state) => state.filter.users);

  // Sorting the array of objects based on Full Name
  const handleSorting = () => {
    dispatch(sortUsers(formUsers));
  };

  return (
    <div className="table-wrapper">
      <table>
        <caption>Users Data</caption>
        <thead>
          <tr>
            <th style={{ cursor: "pointer" }} onClick={handleSorting}>
              Full Name
            </th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0
            ? filteredUsers.map((user) => {
                return <UserData key={user.id} user={user} />;
              })
            : formUsers.map((user) => {
                return <UserData key={user.id} user={user} />;
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
