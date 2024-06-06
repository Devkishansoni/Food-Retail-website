import React from "react";
import Navbar from "../Navbar Com/Navbar";
import CSS from "./Home.css";
import detail from './detail.png'

export default function Home() {
  return (
    <>
      <div className="Home-cont h-screen w-full border border-3 border-[gray]">
        <Navbar />
        <div className="flex flex-col items-start mt-[8rem] ml-[13rem] ">
          <div className="Home-bottom-content w-fit h-fit px-3 py-2">
            <p className="text-xl font-semibold text-gray-500">
              Just Dropped...
            </p>
            <h1 className="text-3xl font-bold text-black">
              Lowest Prices <br />
              Best Quality Shopping.
            </h1>
            <img src={detail} className="w-[400px] rounded-md" alt="" />
            <h2 className="text-xl font-bold text-red-700">
              Get the best Product.
            </h2>
            <p className="text-xs font-semibold text-pink-500">
              From our Store
            </p>
            <button className="mt-2 w-[100px] h-[30px] rounded-xl  text-xs font-semibold text-white bg-blue-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
}
