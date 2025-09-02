import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import { useState } from "react";

const Home = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  const { serverUrl } = useContext(authDataContext);

  const fetchCounts = async () => {
    try {
      const products = await axios.get(
        `${serverUrl}/api/product/list`,
        {},
        { withCredentials: true }
      );
      setTotalProducts(products.data.length);

      const orders = await axios.post(
        `${serverUrl}/api/order/list`,
        {},
        { withCredentials: true }
      );
      setTotalOrders(orders.data.length);
    } catch (err) {
      console.error("Failed to fetch counts", err);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);
  return (
    <div className="bg-gradient-to-l w-[100vw] from-[#d4a465]  h-screen to-[#ab8758] flex  items-cente overflow-x-hidden justify-center ">
      <Nav />
      <Sidebar />
      <div className="flex flex-col justify-center">
        <div className="mast items-center flex flex-col">
          <p className="text-2xl top-1 md:top-10 sm:text-5xl md:text-6xl">
            Wellcome to QuickKart
          </p>
          <div className="flex text-amber-400 text-5xl lg:text-3xl mt-2 items-baseline ">
            <p className="text-3xl md:text-4xl  text-[#1E1E1E] ml-5">
              {" "}
              Admin Page{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="text-[#dcfafd] w-[20vw] min-w-[200px] h-[200px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop:blur-lg  md:text-[25px] text-[20px] border-[1px] border-[#969595]">
            Total No. of Products :{" "}
            <span className="px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969595]">
              {totalProducts}
            </span>
          </div>
          <div className="text-[#dcfafd] w-[20vw] min-w-[200px] h-[200px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop:blur-lg  md:text-[25px] text-[20px] border-[1px] border-[#969595]">
            Total No. of Orders :{" "}
            <span className="px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969595]">
              {totalOrders}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
