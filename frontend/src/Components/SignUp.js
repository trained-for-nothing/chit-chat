import React from "react";
//import { Link } from "react-router";
import { FormHelperText, TextField } from "@material-ui/core";
import Account from "@material-ui/icons/AccountCircleRounded";
import { array } from "./Array";

export default function SignUp() {
  const textFields = (Arrays) => {
    return Arrays.map((item, index) => {
      return (
        <React.Fragment>
          <TextField
            key={index}
            type={item.type}
            placeholder={item.text}
            required
          />
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      <form style={{ textAlign: "center" }}>
        <Account fontSize="large" />
        <br />
        {textFields(array)}
      </form>
      <FormHelperText style={{ textAlign: "center" }}>
        Have an account?
        {/* <Link color="primary" to="./SignIn">
          Log in
        </Link> */}
      </FormHelperText>
    </React.Fragment>
  );
}
