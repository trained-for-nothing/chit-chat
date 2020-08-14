import React from "react";
import SignUp from "./Components/SignUp";
function App() {
  return <SignUp />;
}

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
