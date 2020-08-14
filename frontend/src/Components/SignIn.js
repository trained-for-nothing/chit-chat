import React from "react";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlined from "@material-ui/icons/VisibilityOffOutlined";
import TextField from "./Components/TextFieldC";
import Button from "./Components/ButtonC";
import { FormHelperText } from "@material-ui/core/FormHelperText";

export default function Forms() {
  return (
    <React.Fragment>
      <form style={{ textAlign: "center", marginTop: "42%" }}>
        {" "}
        <TextField type="email" text="UserName/Email-Id" />
        <br />
        <TextField type="password" />
        <VisibilityOutlinedIcon size="small" />
        <br />
        <Button value="Sign In" />
        {/* <Button value="Sign Up" />       if required then uncomment this becuase according to me signup will be the first
                                            page and if user have account this he/she will sign in here. 
        */}
        <br />
        <FormHelperText>Forgot Password?</FormHelperText>
      </form>
    </React.Fragment>
  );
}
