//<div className="bg-gradient-to-l w-[100vw] from-[#facf97] h-screen to-[#dfc9ac]  min-h-[100vh] flex  flex-col py-[20px] items-center overflow-x-hidden justify-start">

import React from "react";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";

function Product() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#facf97] to-[#dfc9ac] flex items-center justify-start flex-col py-[20px]">
      <div className="w-[100%] min-h-[70px] flex items-center justify-center gap-[10px]  flex-col ">
        <LatestCollection />
      </div>
      <div className="w-[100%] min-h-[70px] flex items-center justify-center gap-[10px]  flex-col ">
        <BestSeller />
      </div>
    </div>
  );
}

export default Product;
