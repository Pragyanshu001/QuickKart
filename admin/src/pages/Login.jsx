import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { adminDataContext } from "../context/AdminContext";
const Login = () => {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { adminData, getAdmin } = useContext(adminDataContext);
  let navigate = useNavigate();
  let { serverUrl } = useContext(authDataContext);

  const AdminLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/adminlogin",
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      getAdmin();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] p-5 shadow-2xl shadow-black bg-gradient-to-l from-[#d4a465]    to-[#ab8758] text-[white] flex flex-col items-center justify-start">
      <div className="w-[100%] h-[80px] flex items-center justify-start px-[10px] gap-[10px] cursor-pointer">
        <img className="w-[130px]" src={logo} alt="" />
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="mast text-[30px] font-semibold">Login Page</span>
        <span className="darkText text-[16px]">
          Welcome to QuickKart, Apply to Admin Login
        </span>
      </div>
      <div className="min-w-[350px] w-[35%] h-[60%] text-black bg-[#f5f5f2a4] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center ">
        <form
          action=""
          onSubmit={AdminLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[600px] flex flex-col items-center justify-center gap-[15px]  relative">
            <input
              name="email"
              autoComplete="email"
              type="text"
              className="w-[100%] h-[50px] bg- border-[2px] border-[#754F23] backdrop:blur-sm rounded-lg shadow-lg bg-[#dfc9ac] placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              name="password"
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] border-[2px] border-[#754F23] backdrop:blur-sm rounded-lg shadow-lg bg-[#dfc9ac] placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!show && (
              <IoEyeOutline
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <IoEye
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            <button className="dark w-[100%] h-[50px] rounded-lg flex items-center cursor-pointer justify-center mt-[20px] text-[17px] font-semibold">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
