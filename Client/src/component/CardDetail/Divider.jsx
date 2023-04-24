import { Button } from "@material-tailwind/react";
import React from "react";

const Divider = ({ DividerName }) => {
  return (
    <div className="">
      <hr className="bg-gray-700"></hr>
      <div className="flex justify-center">
        <Button className="px-5 text-sm font-bold bg-[#242424] translate-y-[-15px]">
          {DividerName}
        </Button>
      </div>
    </div>
  );
};

export default Divider;
