import { useState, useContext } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { context } from "../context";

const initialFormValues = {
  fullName: "",
  lastName: "",
  email: "",
};

const Form = () => {
  const [values, setValues] = useState(initialFormValues);

  const { handleSubmit } = useContext(context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetFormValues = () => {
    setValues(initialFormValues);
  };

  return (
    <div>
      <Typography
        style={{ marginTop: "2rem" }}
        variant="h3"
        color="primary"
        align="center"
      >
        React-MaterialUI App
      </Typography>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px" }}>
        <CardContent>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              resetFormValues();
            }}
          >
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  label="Full Name"
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item style={{ margin: "15px 0" }}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
