import { Grid, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterUsers, sortUsers } from "../redux/";

const Search = () => {
  const dispatch = useDispatch();
  const formUsers = useSelector((state) => state.form.formUsers);

  const [search, setSearch] = useState("");

  // Binary Search for the faster result
  const handleSearch = (e) => {
    setSearch(e.target.value);

    const target = e.target.value.toLowerCase();

    dispatch(sortUsers(formUsers));

    let low = 0;
    let high = formUsers.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (formUsers[mid].fullName.toLowerCase().includes(target)) {
        const filterUsrs = formUsers.filter((item) =>
          item.fullName.toLowerCase().includes(target)
        );
        dispatch(filterUsers(filterUsrs));
      }

      if (formUsers[mid].fullName.toLowerCase() > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  };

  return (
    <Grid
      container
      style={{
        maxWidth: 350,
        margin: "48px auto 10px auto",
        padding: "20px 0",
      }}
    >
      <Grid xs={10} item>
        <TextField
          label="Search Here"
          name="searchBox"
          value={search}
          onChange={handleSearch}
          placeholder="Search the users"
          variant="outlined"
          required
          fullWidth
        />
      </Grid>
      <Grid xs={2} item>
        <Button
          style={{ fontSize: "25px" }}
          type="submit"
          color="primary"
          variant="contained"
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
