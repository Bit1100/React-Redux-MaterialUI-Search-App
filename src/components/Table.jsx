import UserData from "./UserData";
import { connect } from "react-redux";
import { sortUsers } from "../redux";

const Table = ({ formUsers, filteredUsers, sortUsrs }) => {
  // Sorting the array of objects based on Full Name
  const handleSorting = () => {
    sortUsrs(formUsers);
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

const mapStateToProps = (state) => ({
  formUsers: state.form.formUsers,
  filteredUsers: state.filter.users,
});

const mapStateToDispatch = (dispatch) => ({
  sortUsrs: (users) => dispatch(sortUsers(users)),
});

export default connect(mapStateToProps, mapStateToDispatch)(Table);
