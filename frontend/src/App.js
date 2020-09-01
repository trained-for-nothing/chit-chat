import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "normalize.css";
import SignUp from "./Components/Admin/SignUp";
import SignIn from "./Components/Admin/SignIn";
import AssembleHome from "./Components/Home/AssembleHome";

import "./Stylling/Main.css";
const path = "/Components/";

function App() {
  console.log(path);
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path={`${path}SignIn`} component={SignIn} />
          <Route path={`${path}SignUp`} component={SignUp} />
          <Route
            path="/Components/Home/AssembleHome"
            component={AssembleHome}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
//"/Components/SignUp"
export default App;

/* <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl> */

// const [values, setValues] = React.useState({
//   amount: '',
//   password: '',
//   weight: '',
//   weightRange: '',
//   showPassword: false,
// });

// const handleChange = (prop) => (event) => {
//   setValues({ ...values, [prop]: event.target.value });
// };

// const handleClickShowPassword = () => {
//   setValues({ ...values, showPassword: !values.showPassword });
// };

// const handleMouseDownPassword = (event) => {
//   event.preventDefault();
// };
