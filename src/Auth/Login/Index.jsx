import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Icon } from "@iconify/react";
import {
  Checkbox,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import Logo from "../../Images/Logo/kalyan_logo.png";
const Index = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-wrap w-full h-full">
      <div className="w-1/2 h-[100vh] bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500 shadow-lg rounded-r-[40px] flex items-center justify-center">
        <p className="text-white font-bold text-xl login-glass w-1/2">
          Diagonal Gradient
        </p>
      </div>

      <div className="w-1/2 h-[100vh] ">
        <div className="h-full w-full flex justify-center items-center p-12">
          <div className="w-full">
            <div className="flex flex-col justify-center  items-center">
              <div className="h-36 w-8/12 mb-14 flex justify-center items-center">
                <img
                  src={Logo}
                  className="w-fit h-full object-cover"
                  alt="Logo"
                />
              </div>
              <form className="w-full">
                <div className="w-full flex flex-col justify-center items-center gap-4 ">
                  <div className="!flex-col flex w-8/12">
                    <label className="mb-[8px]">Enter Password</label>
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      placeholder="admin@gmail.com"
                    />
                  </div>
                  <div className="!flex-col flex w-8/12">
                    <label className="mb-[8px]">Enter Password</label>
                    <FormControl variant="outlined">
                      <OutlinedInput
                        placeholder="Enter Gmail id"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <Icon icon="mdi:eye" />
                              ) : (
                                <Icon icon="mdi:eye-off" />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                </div>
              </form>

              <div className="w-8/12 flex justify-between items-center mt-4">
                <div className="flex items-center ">
                  <Checkbox className="!pl-0 !pt-0 !pb-0 !pr-1" />
                  <span>Remember me</span>
                </div>
                <div className="w-fit">Forget Password?</div>
              </div>

              <div className="w-8/12 rounded-[4px] mt-6 bg-primary py-2 text-center font-semibold text-white">
                <button>Sign In</button>
              </div>
              <div className="w-8/12 text-center  mt-9">
                Don't have an account?
                <span className="font-semibold">Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
