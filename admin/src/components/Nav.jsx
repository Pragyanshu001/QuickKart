import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";

const Nav = () => {
  let navigate = useNavigate();
  let { serverUrl } = useContext(authDataContext);
  let { getAdmin } = useContext(adminDataContext);

  const logOut = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result.data);
      // toast.success("LogOut Successfully")
      getAdmin();
      navigate("/login");
    } catch (error) {
      console.log(error);
      // toast.error("LogOut Failed")
    }
  };

  return (
    <div className="w-[100vw] h-[80px] backdrop-blur-xl  z-10 fixed top-0 flex items-center justify-between px-[70px]">
      <div className="w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer w-[130px]"
          onClick={() => navigate("/")}
        />
      </div>
      <button
        className="text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white"
        onClick={logOut}
      >
        LogOut
      </button>
      <div className=" fixed dark  left-[13%] top-[80px] h-[3px] w-[74%]"></div>
    </div>
  );
};

export default Nav;
