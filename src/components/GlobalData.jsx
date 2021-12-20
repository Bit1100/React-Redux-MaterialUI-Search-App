import { useEffect } from "react";
import { getUsers, setUsers } from "../Utils/storage";
import { useDispatch, useSelector } from "react-redux";
import { getUsers as getUsersRedux } from "../redux";
import { pipe } from "lodash/fp";

const GlobalData = ({ children }) => {
  const dispatch = useDispatch();
  const formUsers = useSelector((state) => state.form);

  // Getting the data from localStorage on Page Refresh
  useEffect(() => {
    pipe(getUsersRedux, dispatch)(getUsers().formUsers);
  }, [dispatch]);

  // Storing the new data into the localStorage
  useEffect(() => {
    setUsers(formUsers);
  }, [formUsers]);

  return <>{children}</>;
};

export default GlobalData;
