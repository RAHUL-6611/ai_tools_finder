import React from "react";
import kid from "../../assets/images/kid.png";
const CardDetail = () => {
  return (
    <div className="container max-w-[1024px] mx-auto my-10">
      <div className="flex gap-5 ">
        <div className="h-38 w-36 p-2 bg-gray-700 rounded-xl">
          <img
            src={kid}
            className="object-cover object-fit object-center rounded-xl"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-[20px]">Quickvideo.ai</h1>
          <p>Unclaimed</p>
          <p>200 per month</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
