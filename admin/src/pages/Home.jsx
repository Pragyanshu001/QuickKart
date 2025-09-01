import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="bg-gradient-to-l w-[100vw] from-[#facf97] h-screen to-[#dfc9ac] flex  items-center overflow-x-hidden justify-start">
      <Nav />
      <Sidebar />
    </div>
  );
};

export default Home;
