import React from "react";
import pfp from "../assets/pfp.png";
export default function MoreProfiles() {
  const staticdata = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
  ];
  return (
    <>
      <div className=" flex items-center justify-between ml-3 mt-2">
        <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white  ">
          More Profiles
        </h4>
        <a class="text-sm text-gray-500 ml-auto">View All</a>
      </div>
      <div className=" grid grid-cols-5  ml-3 mt-5">
        {" "}
        {staticdata.slice(0, 10).map((val, ind) => (
          <img
            class="mb-3 w-8 h-8 rounded-full shadow-lg"
            src={pfp}
            alt="Bonnie image"
          />
        ))}
      </div>
    </>
  );
}
