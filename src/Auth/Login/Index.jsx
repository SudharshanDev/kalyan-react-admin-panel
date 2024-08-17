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
import LoginBaground from "../../Images/Baground/bg-gold.jpg";
import LogoPng from "../../Images/Logo/logo-icon-1.png";
const Index = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-wrap w-full h-full">
      <div className="w-1/2 relative max-lg:hidden  h-[100vh] bg-black flex items-center justify-center">
        <img src={LoginBaground} className="object-cover w-full h-full" alt="" />
        
        <div className="absolute flex flex-col items-center justify-center text-center h-80 w-72 ">
          <div className="w-2/12 mb-9">
          <img src={LogoPng} className="w-full h-full" alt="" />
          </div>
          <h1 className="  font-Barlow   w-fit h-fit  font-normal text-white text-[1.4rem]">KALYAN JEWELLERS <br /> Uploade your Products with this Admin Panel</h1>
        </div>
      </div>

      <div className="w-1/2 h-[100vh] ">
        <div className="flex items-center justify-center w-full h-full p-12">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-8/12 h-36 mb-14">
                <img
                  src={Logo}
                  className="object-cover h-full w-fit"
                  alt="Logo"
                />
              </div>
              <form className="w-full">
                <div className="flex flex-col items-center justify-center w-full gap-4 ">
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

              <div className="flex items-center justify-between w-8/12 mt-4">
                <div className="flex items-center ">
                  <Checkbox className="!pl-0 !pt-0 !pb-0 !pr-1" />
                  <span>Remember me</span>
                </div>
                <div className="w-fit">Forget Password?</div>
              </div>

              <div className="w-8/12 rounded-[4px] mt-6 bg-primary py-2 text-center font-semibold text-white">
                <button>Sign In</button>
              </div>
              <div className="w-8/12 text-center mt-9">
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
