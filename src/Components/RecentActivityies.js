import React from "react";
import pfp from "../assets/pfp.png";
export default function RecentActivityies() {
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
      <div className=" flex items-center justify-between mt-2 ml-3">
        <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white  ">
          Recent Activity
        </h4>
        <a class="text-sm text-gray-500 ml-auto">View All</a>
      </div>
      <div className="ml-3 ">
        {" "}
        {staticdata.slice(0, 3).map((val, ind) => (
          <div className="flex mt-5">
            <div className="flex items-center">
              <img
                class="mb-3 w-8 h-8 rounded-full shadow-lg"
                src={pfp}
                alt="Bonnie image"
              />
            </div>
            <div className="ml-2">
              <div className="flex gap-1 items-center">
                <h6 class=" font-semibold whitespace-nowrap dark:text-white  ">
                  Jhon
                </h6>
                <p class="text-sm text-gray-500 ">Posted a photo</p>
              </div>
              <p class="text-sm text-gray-500 ">5 mins ago</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
