import React from "react";
import BellIcon from "../assets/icons/bell.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import ExitIcon from "../assets/icons/exit.svg?react";
import MenuIcon from "../assets/icons/burger.svg?react";

function Navbar({ open, toggleSidebar }) {
  return (
    <div className="sticky top-0 bg-white w-full py-4 px-8 flex justify-between items-center border-b border-b-gray">
      <div className="flex items-center gap-3">
        {open ? <></> : <MenuIcon className="w-8 h-8 cursor-pointer" onClick={toggleSidebar} />}
        <span className="font-bold text-xl">Dashboard</span>
      </div>
      <div className="flex items-center">
        <BellIcon className="cursor-pointer" />
        <div className="p-1 rounded-full bg-light-gray flex items-center gap-2 ms-3 cursor-pointer">
          <div className="p-1 rounded-full bg-gray w-8 h-8 flex items-center justify-center">
            <UserIcon />
          </div>
          <span>John Doe</span>
          <div className="p-1 rounded-full w-8 h-8 flex items-center justify-center">
            <ExitIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
