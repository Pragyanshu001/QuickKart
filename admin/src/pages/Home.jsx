import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="bg-gradient-to-l w-[100vw] from-[#d4a465]  h-screen to-[#ab8758] flex  items-center overflow-x-hidden justify-center ">
      <Nav />
      <Sidebar />
      <div className="mast items-center flex flex-col absolute">
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
    </div>
  );
};

export default Home;
