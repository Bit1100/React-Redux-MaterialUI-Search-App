import React from "react";
import { useState, useEffect } from "react";
import { ContextProvider } from "../context";
import { getUsers, setUsers } from "../Utils/storage";

const GlobalData = ({ children }) => {
  const [formData, setFormData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  // Getting the data from localStorage on Page Refresh
  useEffect(() => {
    setFormData(getUsers());
  }, []);

  // Storing the new data into the localStorage
  useEffect(() => {
    setUsers(formData);
  }, [formData]);

  // Sorting the array of objects based on Full Name
  const sortByName = () => {
    const _formData = [...formData];

    // SOrting the users record in an ascending order
    _formData.sort((a, b) => {
      let x = a.fullName.toLowerCase();
      let y = b.fullName.toLowerCase();

      if (x < y) return -1;
      else if (y < x) return 1;
      return 0;
    });

    return _formData;
  };

  // Sorting the Array
  const handleSorting = () => {
    const sortedUsers = sortByName();

    setFormData(sortedUsers);
  };

  // Binary Search for the faster result
  const handleSearch = (e) => {
    const target = e.target.value.toLowerCase();

    const sortedUsers = sortByName();

    let low = 0;
    let high = sortedUsers.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (sortedUsers[mid].fullName.toLowerCase().includes(target)) {
        const filterUsers = sortedUsers.filter((item) =>
          item.fullName.toLowerCase().includes(target)
        );
        setFilterData(filterUsers);
      }

      if (sortedUsers[mid].fullName.toLowerCase() > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  };

  // Submit the formdata
  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, lastName, email } = e.target;

    const _formData = [...formData];

    // Pushing the new user record to the formData at the end
    _formData.push({
      id: new Date().valueOf(),
      fullName: fullName.value,
      lastName: lastName.value,
      email: email.value,
    });

    setFormData(_formData);
  };

  return (
    <ContextProvider
      value={{
        formData,
        setFormData,
        filterData,
        setFilterData,
        handleSubmit,
        handleSorting,
        handleSearch,
      }}
    >
      {children}
    </ContextProvider>
  );
};

export default GlobalData;
