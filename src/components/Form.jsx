import { connect } from "react-redux";
import { useState } from "react";
import { addUsers } from "../redux";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const initialFormValues = {
  fullName: "",
  lastName: "",
  email: "",
};

const Form = ({ addUsers }) => {
  const [values, setValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Submit the formdata
  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, lastName, email } = e.target;

    // Pushing the new user record to the formData at the end
    addUsers({
      fullName: fullName.value,
      lastName: lastName.value,
      email: email.value,
    });

    resetFormValues();
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
          <form onSubmit={handleSubmit}>
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

const mapStateToDispatch = (dispatch) => ({
  addUsers: (user) => dispatch(addUsers(user)),
});

export default connect(null, mapStateToDispatch)(Form);
