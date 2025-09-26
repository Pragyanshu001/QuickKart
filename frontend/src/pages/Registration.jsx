import React from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { userDataContext } from "../context/UserContext";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { authDataContext } from "../context/AuthContext";

function Registration() {
  let [show, setShow] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { userdata, getCurrentUser } = useContext(userDataContext);
  let [loading, setLoading] = useState(false);
  let [passwordMsg, setPasswordMsg] = useState("");

  let navigate = useNavigate();

  const handleSignup = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/registration",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      getCurrentUser();

      sessionStorage.setItem("justLoggedIn", "true");

      navigate("/");
      toast.success("User Registration Successful");
      console.log(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      toast.error("User Registration Failed");
    }
  };

  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;

      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name, email },
        { withCredentials: true }
      );
      console.log(result.data);
      getCurrentUser();
      sessionStorage.setItem("justLoggedIn", "true");
      navigate("/");
      toast.success("User Registration Successful");
    } catch (error) {
      console.log(error);
      toast.error("User Registration Failed");
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#d4a465] to-[#ab8758] text-[white] flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-[130px]" src={Logo} alt="" />
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="mast text-[30px] font-semibold">Login Page</span>
        <span className="darkText text-[16px]">
          Welcome to QuickKart, Place your order
        </span>
      </div>
      <div className="min-w-[350px] w-[35%] h-[65%] text-black bg-[#f5f5f2a4] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center ">
        <form
          action=""
          onSubmit={handleSignup}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div
            className="w-[90%] h-[50px] bg-[#754F23] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer"
            onClick={googleSignup}
          >
            <img src={google} alt="" className="w-[20px]" /> Registration with
            Google
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[3px] bg-[#754F23]"></div> OR{" "}
            <div className="w-[40%] h-[3px] bg-[#754F23]"></div>
          </div>
          <div className="w-[90%] h-[300px] flex flex-col items-center justify-center gap-[15px]  relative">
            <input
              type="text"
              className="w-[100%] h-[50px] bg- border-[2px] border-[#754F23] backdrop:blur-sm rounded-lg shadow-lg bg-[#dfc9ac] placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="UserName"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#754F23] backdrop:blur-sm rounded-lg shadow-lg bg-[#dfc9ac] placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] border-[2px] border-[#754F23] backdrop:blur-sm rounded-lg shadow-lg bg-[#dfc9ac] placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.length < 8) {
                  setPasswordMsg("Password must be at least 8 characters");
                } else {
                  setPasswordMsg("");
                }
              }}
              value={password}
            />
            {passwordMsg && (
              <p className="text-red-600 text-sm font-semibold absolute bottom-[6.5rem] left-[1rem]">
                {passwordMsg}
              </p>
            )}

            {!show && (
              <IoEyeOutline
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <IoEye
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {password.length >= 8 ? (
              <button className="dark w-[100%] h-[50px] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
                {loading ? <Loading /> : "Create Account"}
              </button>
            ) : (
              <span className="dark w-[100%] h-[50px] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
                Create Account
              </span>
            )}
            <p className="flex gap-[10px]">
              You have any account?{" "}
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
