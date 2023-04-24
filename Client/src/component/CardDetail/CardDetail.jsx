import React from "react";
import Rating from "@mui/material/Rating";
import { Button } from "@material-tailwind/react";
import NearMeIcon from "@mui/icons-material/NearMe";
import FavoriteIcon from "@mui/icons-material/Favorite";
import kid from "../../assets/images/kid.png";
import image from "../../assets/images/notes-bg.png";
import Divider from "./Divider";

const CardDetail = () => {
  return (
    <div className="container p-2 md:p-5 max-w-[1024px] mx-auto">
      <div className="flex gap-3 md:gap-8">
        <div className="">
          <div className="h-38 w-36 p-2 bg-gray-700 rounded-xl">
            <img
              src={kid}
              className="object-cover object-fit object-center rounded-xl"
            />
          </div>
          <div className="mt-2 flex justify-evenly ">
            <Button className="flex gap-1 items-center bg-indigo-600 px-4 py-2 rounded-md">
              <NearMeIcon sx={{ fontSize: "1.1rem" }} /> Visit
            </Button>
            <Button className="bg-pink-500 px-4 py-2 rounded-md">
              <FavoriteIcon sx={{ fontSize: "1rem" }} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[20px]">Quickvideo.ai</h1>
          <p>Unclaimed</p>
          <p>200 per month</p>
          <div className="flex gap-3">
            <Rating name="read-only" value={3} />
            <p>3.3</p>
          </div>
          <div className="flex gap-3 flex-wrap mt-3">
            <span className="bg-indigo-200 px-3 py-1 text-gray-900 text-sm font-bold rounded-xl">
              Youtubbe Shorts
            </span>
            <span className="bg-indigo-200 px-3 py-1 text-gray-900 text-sm font-bold rounded-xl">
              Reacting Video
            </span>
            <span className="bg-indigo-200 px-3 py-1 text-gray-900 text-sm font-bold rounded-xl">
              COntent Creation
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Divider DividerName="overview" />
        <div className="mt-5">
          <h1 className="text-xl md:text-2xl lg:text-3xl ">
            Create YouTube Shorts and TikToks 10x faster with the power of AI
          </h1>
          <p className="mt-1">Some text here</p>
          <div className="mt-3">
            <img
              src={image}
              className="object-fit object-center w-auto h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* <div className="">
        <p className="text-center">More You might Like</p>
      </div> */}

      <div className="mt-10">
        <Divider DividerName="comments" />

        <div className="border border-gray-500 p-5 rounded-lg">
          <Rating name="read-only" value={3} />
          <p className="mt-3">ANime Video</p>
          <div className="flex gap-3 mt-5">
            <img src={kid} className="h-8 w-8 rounded-full" />{" "}
            <p>Google User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
