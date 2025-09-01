import React from "react";
// import LoginAnimation from "../components/LoginAnimation";
import Hero from "../components/Hero";
import { FlipWords } from "../components/FlipWord";
import Product from "./Product";
import OurPolicy from "../components/OurPolicy";
import NewLetterBox from "../components/NewLetterBox";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* <LoginAnimation /> */}

      <div className="text bg-gradient-to-l overflow-y-hidden w-[100vw] h-screen from-[#d4a465]  to-[#ab8758] md:flex items-center overflow-x-hidden justify-start">
        <div className="relative md:w-1/2 h-30 top-30 justify-center flex md:h-[100vh] ">
          <div className="mast flex flex-col justify-center absolute top-1 md:top-[30%] md:pl-[15px]">
            <p className="text-2xl top-1 md:top-10 sm:text-5xl md:text-6xl">
              Wellcome to QuickKart
            </p>
            <div className="flex text-amber-400 text-5xl lg:text-3xl mt-2 items-baseline ">
              <p className="text-3xl md:text-4xl  text-[#1E1E1E] ml-5">
                {" "}
                To Explore ,{" "}
              </p>

              <FlipWords
                words={[
                  "Fashion",
                  "Trends",
                  "Style",
                  "Outfits",
                  "Clothing",
                  "Accessories",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 md:h-[100vh] ">
          <Hero />
        </div>
      </div>
      <Product />
      <OurPolicy />
      <NewLetterBox />
      <Footer />
    </>
  );
};

export default Home;
