import { Grid, TextField, Button } from "@material-ui/core";
import { useState, useContext } from "react";
import { context } from "../context";

const Search = () => {
  const [search, setSearch] = useState("");
  const { handleSearch } = useContext(context);

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
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e);
          }}
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
