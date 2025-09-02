import React, { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, image, id, price }) {
  let { currency } = useContext(shopDataContext);
  let navigate = useNavigate();
  return (
   <div
      className="md:w-[300px] w-[200px] max-w-[90%] md:h-[400px] h-[250px] bg-[#3c597f] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col pt-[10px] px-[10px] cursor-pointer border-[1px] border-[#80808049]"
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      <div className="w-[100%] h-[80%]">
        <img
          src={image}
          alt=""
          className="w-[100%] h-[100%] rounded-sm object-cover "
        />
      </div>
      <div className="w-full h-[20%] flex flex-col justify-center">
        <div className="text-[#c3f6fa] text-[90%] py-[1%]">{name}</div>
        <div className="text-[#f3fafa] text-[90%]">
          {currency} {price}
        </div>
      </div>
    </div>
  );
}

export default Card;
