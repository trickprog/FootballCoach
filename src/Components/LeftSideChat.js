import React from "react";
import pfp from "../assets/pfp.png";
export default function LeftSideChat() {
  return (
    <>
      <div className=" mx-10 my-5">
        <div className="flex gap-2">
          <img class=" w-10 h-10 rounded-full " src={pfp} alt="Bonnie image" />
          <div>
            <div className="flex  justify-between mx2">
              <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                Dale
              </h5>
              <p class="font-normal text-sm mt-0.5 text-gray-700 dark:text-gray-400">
                12.00 PM
              </p>
            </div>

            <p class="font-normal bg-white text-sm text-black mt-1  rounded-tr-lg rounded-b-lg py-2 px-6">
              I’m coming in 5 minutes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
