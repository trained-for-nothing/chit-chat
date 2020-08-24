import React from "react";
import { Link } from "react-router-dom";
import { FormHelperText, TextField, Button } from "@material-ui/core";
import Account from "@material-ui/icons/AccountCircleRounded";

export default function SignUp() {
  return (
    <React.Fragment>
      <div className="Div-Up">
        <h1 className="Form-Heading h1 head Text-Color">Register</h1>
      </div>
      <div>
        <form className="Form" style={{ marginTop: "15%" }}>
          <Account className="Form-Icon" style={{ fontSize: "5rem" }} />
          <br />

          <TextField
            placeholder="UserName "
            className="Form-Text lg"
            required
          />
          <br />
          <TextField
            placeholder="Email-Id"
            className="Form-Text lg pt"
            required
          />
          <br />
          <TextField
            type="email"
            placeholder="Lastname"
            className="Form-Text lg"
            required
          />
          <br />
          <TextField
            type="password"
            placeholder="Password"
            className="Form-Text lg"
            required
          />
          <br />
          <TextField
            type="password"
            placeholder="Confirm Password"
            className="Form-Text lg"
            required
          />
          <br />
          <br />
          <Button variant="contained">Register</Button>
          <br />
          <FormHelperText style={{ textAlign: "center" }}>
            Have an account?
            <Link to="./SignIn">Login</Link>
          </FormHelperText>
        </form>
      </div>
    </React.Fragment>
  );
}
