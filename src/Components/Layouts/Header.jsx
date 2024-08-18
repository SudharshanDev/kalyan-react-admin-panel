import { useState } from "react";
import { Icon } from "@iconify/react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className="flex items-center justify-between w-full gap-4 px-10 py-3 shadow-sm shadow-gray-300">
        <Icon className="text-[28px] text-gray-700" icon="uis:bars" />

        <div>
          <div
            aria-describedby={id}
   
            onClick={handleClick}
          >
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
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Header;
