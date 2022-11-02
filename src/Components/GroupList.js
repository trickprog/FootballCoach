import React from "react";
import grouplist from "../assets/grouplist.png";
export default function GroupList() {
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


  ];
  return (
    <>
      <div className=" flex items-center justify-between ml-3 mt-10">
        <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white  ">
          Groups
        </h4>
        <a href="/newsfeed/groups" class="text-sm text-gray-500 ml-auto">View All</a>
      </div>
      {staticdata.map((val, ind) => (
        <a href="/newsfeed/selectedGroup" className="flex gap-2 mt-2 items-center ml-3">
          <img
            class=" w-16 h-16 rounded-md "
            src={grouplist}
            alt="Bonnie image"
          />
          <div>
            <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white  ">
              Strikers Group
            </h4>
            <div className="flex items-center gap-1">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#1DB954" />
              </svg>
              <p class="font-normal text-left text-sm text-gray-400">
                32 members in it
              </p>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}
