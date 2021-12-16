import { useContext } from "react";
import { context } from "../context";
import UserData from "./UserData";

const Table = () => {
  const { formData, filterData, handleSorting } = useContext(context);
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
          {filterData.length > 0
            ? filterData.map((user) => {
                return <UserData key={user.id} user={user} />;
              })
            : formData.map((user) => {
                return <UserData key={user.id} user={user} />;
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
