import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (val) => () => {
    setOpen(val);
  };

  const sidebarContent = (
    <div className="bg-[#c78d4182] md:w-[250px] w-[150px] h-[100vh] p-6">
      <div className="flex flex-col gap-4 text-[15px]">
        <div
          className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
          onClick={() => navigate("/add")}
        >
          <IoIosAddCircleOutline className="w-[20px] h-[20px]" />
          <p className="hidden md:block">Add Items</p>
        </div>

        <div
          className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
          onClick={() => navigate("/lists")}
        >
          <FaRegListAlt className="w-[20px] h-[20px]" />
          <p className="hidden md:block">List Items</p>
        </div>

        <div
          className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]"
          onClick={() => navigate("/orders")}
        >
          <SiTicktick className="w-[20px] h-[20px]" />
          <p className="hidden md:block">View Orders</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Menu button (Top Left) */}
      <IconButton
        onClick={toggleDrawer(true)}
        className="!fixed top-4 left-4 z-50 shadow-lg shadow-[#b99151]"
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer from left */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {sidebarContent}
      </Drawer>
    </>
  );
}

export default Sidebar;
