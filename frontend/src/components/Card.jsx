import React, { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, image, id, price }) {
  let { currency } = useContext(shopDataContext);
  let navigate = useNavigate();
  return (
    <div
      className="md:w-[300px] w-[150px] max-w-[90%] md:h-[400px] h-[250px] bg-[#3c597f] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[#80808049]"
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      <img
        src={image}
        alt=""
        className="w-[100%] h-[80%] rounded-sm object-cover "
      />
      <div className="text-[#c3f6fa] text-[18px] py-[10px]">{name}</div>
      <div className="text-[#f3fafa] text-[14px] ">
        {currency} {price}
      </div>
    </div>
  );
}

export default Card;
