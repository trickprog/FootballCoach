import React from "react";
import Header from "../Components/Header";
import grp from "../assets/groupimg.png";
export default function Groups() {
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
  ];
  return (
    <>
      <div className="flex-col w-full">
        {/* Page Header */}
        <Header title={"Groups"} />
        {/* Title Of the Page */}
        <div className="flex items-center justify-between  mx-10">
          <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white my-5 ">
            All Groups
          </h4>
          <div className=" space-x-5">
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-6  text-sm font-medium text-white bg-green-500 rounded-md "
            >
              Search
            </button>
            <a
              href="/newsfeed/addgroups"
              class="inline-flex items-center py-2.5 px-6  text-sm font-medium text-black bg-white rounded-md "
            >
              New Group
            </a>
          </div>
        </div>
        {/* Group Cards */}
        <div className="my-5 mx-10 grid lg:grid-cols-4 2xl:grid-cols-5 gap-5">
          {staticdata.map((val, ind) => (
            <div class="  p-4 max-w-xs bg-[#212121] rounded-lg ">
              <div className="flex gap-5 items-center">
                <img src={grp} />
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    The striker boys
                  </h5>
                  <div className="flex items-center gap-5">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#1DB954" />
                    </svg>

                    <p class="font-normal text-gray-700 dark:text-gray-400">
                      22 Members
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <svg
                  width="19"
                  height="5"
                  viewBox="0 0 19 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.201 5.68597e-08C8.91196 5.07687e-08 8.62575 0.0569305 8.35871 0.167541C8.09168 0.278152 7.84904 0.440276 7.64466 0.644658C7.44028 0.84904 7.27815 1.09168 7.16754 1.35871C7.05693 1.62575 7 1.91196 7 2.201C7 2.49004 7.05693 2.77625 7.16754 3.04329C7.27815 3.31032 7.44028 3.55296 7.64466 3.75734C7.84904 3.96172 8.09168 4.12385 8.35871 4.23446C8.62575 4.34507 8.91196 4.402 9.201 4.402C9.78474 4.40187 10.3445 4.16985 10.7572 3.75699C11.1699 3.34413 11.4016 2.78424 11.4015 2.2005C11.4014 1.61676 11.1693 1.05698 10.7565 0.644304C10.3436 0.231631 9.78374 -0.000132534 9.2 5.68597e-08H9.201ZM2.201 5.68597e-08C1.91196 5.07687e-08 1.62575 0.0569305 1.35871 0.167541C1.09168 0.278152 0.84904 0.440276 0.644658 0.644658C0.440276 0.84904 0.278152 1.09168 0.167541 1.35871C0.0569305 1.62575 0 1.91196 0 2.201C0 2.49004 0.0569305 2.77625 0.167541 3.04329C0.278152 3.31032 0.440276 3.55296 0.644658 3.75734C0.84904 3.96172 1.09168 4.12385 1.35871 4.23446C1.62575 4.34507 1.91196 4.402 2.201 4.402C2.78474 4.40187 3.34452 4.16985 3.7572 3.75699C4.16987 3.34413 4.40163 2.78424 4.4015 2.2005C4.40137 1.61676 4.16935 1.05698 3.75649 0.644304C3.34363 0.231631 2.78374 -0.000132534 2.2 5.68597e-08H2.201ZM16.201 5.68597e-08C15.912 5.07687e-08 15.6258 0.0569305 15.3587 0.167541C15.0917 0.278152 14.849 0.440276 14.6447 0.644658C14.4403 0.84904 14.2782 1.09168 14.1675 1.35871C14.0569 1.62575 14 1.91196 14 2.201C14 2.49004 14.0569 2.77625 14.1675 3.04329C14.2782 3.31032 14.4403 3.55296 14.6447 3.75734C14.849 3.96172 15.0917 4.12385 15.3587 4.23446C15.6258 4.34507 15.912 4.402 16.201 4.402C16.7847 4.40187 17.3445 4.16985 17.7572 3.75699C18.1699 3.34413 18.4016 2.78424 18.4015 2.2005C18.4014 1.61676 18.1693 1.05698 17.7565 0.644304C17.3436 0.231631 16.7837 -0.000132534 16.2 5.68597e-08H16.201Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
