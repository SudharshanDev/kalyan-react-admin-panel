import { useState } from "react";
import { Icon } from "@iconify/react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Logo from "../../Assets/Images/Logo/logo-icon-1.png";
const Header = ({ drawer, ToggleDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  // ------
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // ------

  return (
    <>
      <div className="bg-white">
        <div
          className={`${
            drawer
              ? "flex items-end justify-end  w-full gap-4 px-6 py-4  border-[1px]  shadow-sm border-b-gray-200 "
              : "   flex items-center justify-between w-full gap-4 px-6 py-4  border-[1px]  shadow-sm border-b-gray-200 "
          }`}
        >
          <div className="w-1/2">
            {drawer ? null : (
              <div className="flex items-center w-10 h-10 gap-4  font-bold text-[22px]">
                <img className="w-full h-full" src={Logo} alt="Logo" /> Kalyan
              </div>
            )}
          </div>
          <div className="flex items-center gap-4 w-fit">
            <div>
              <div aria-describedby={id} onClick={handleClick}>
                <Avatar className="!w-7 !h-7" />
              </div>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  The content of the Popover.
                </Typography>
              </Popover>
            </div>
            <div
              onClick={ToggleDrawer}
              className="p-2 bg-gray-100 rounded-full"
            >
              {drawer ? (
                <Icon
                  className="text-[20px] text-gray-700"
                  icon="ic:round-menu"
                />
              ) : (
                <Icon
                  className="text-[20px] text-gray-700"
                  icon="ri:arrow-left-s-line"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
