import React from "react";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlined from "@material-ui/icons/VisibilityOffOutlined";
import {
  FormHelperText,
  Button,
  TextField,
  IconButton,
} from "@material-ui/core";
import PermIdentityOutlined from "@material-ui/icons/PermIdentityOutlined";
export default function Forms() {
  return (
    <React.Fragment>
      <div className="div">
        <h2 className="Form-Heading Text-Color h1">Chit-Chat</h2>
        <form className="Form">
          {" "}
          <div className="p">
            <TextField
              placeholder="Username"
              className="Box-Width Color"
              required
            />
            <PermIdentityOutlined
              size="small"
              className="Text-Color Form-IconMove"
            />
          </div>
          <br />
          <div className="p">
            <TextField
              type="password"
              placeholder="Password"
              className="Box-Width Color"
              required
            />
            <VisibilityOutlinedIcon
              size="small"
              className="Text-Color Form-IconMove"
            />
          </div>
          <br />
          <Button variant="contained" className="Box-Width">
            Sign In
          </Button>
          ;
          <FormHelperText>
            <p className="Text-Color" style={{ textAlign: "center" }}>
              Forgot Password? <a href="#">Click Here</a>
            </p>
          </FormHelperText>
        </form>
      </div>
    </React.Fragment>
  );
}
