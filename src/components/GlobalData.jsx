import { useEffect } from "react";
import { getUsers, setUsers } from "../Utils/storage";
import { connect } from "react-redux";
import { getUsers as getUsersRedux } from "../redux";

const GlobalData = ({ children, formUsers, setFormUsers }) => {
  // Getting the data from localStorage on Page Refresh
  useEffect(() => {
    setFormUsers(getUsers().formUsers);
  }, [setFormUsers]);
  // Storing the new data into the localStorage

  useEffect(() => {
    setUsers(formUsers);
  }, [formUsers]);

  return <>{children}</>;
};

const mapStateToProps = (state) => ({
  formUsers: state.form,
});

const mapDispatchToProps = (dispatch) => ({
  setFormUsers: (users) => dispatch(getUsersRedux(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalData);
