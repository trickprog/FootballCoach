import React from "react";
import pfp from "../assets/pfp.png";
import MoreProfiles from "./MoreProfiles";
import RecentActivityies from "./RecentActivityies";
export default function PlayerProfileRightSidebar() {
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
      {/* Parent Profile Card */}
      <div className="">
        <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-3 ">
          Parent Profile
        </h4>
        <div class="w-full min-w-sm bg-transparent   ">
          <div class="flex justify-center px-4 pt-4">
            <div class="flex flex-col items-center pb-10">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src={pfp}
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-white ">Augustus</h5>
              <span class="text-sm text-gray-500">Augustus@gmail.com</span>
              <a
                href="/chat"
                class="inline-flex items-center py-2 px-4 mt-2 text-sm font-medium text-white bg-green-500 rounded-md "
              >
                Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* More Profile */}
      <div className="">
        <MoreProfiles />
      </div>

      {/* Recent Activity */}
      <div className="">
        <RecentActivityies />
      </div>
    </>
  );
}
