import React, { useState } from "react";
import Calendar from "react-calendar";
import Header from "../Components/Header";
import "react-calendar/dist/Calendar.css";
import pfp from "../assets/pfp.png";
export default function Dashboard() {
  const [value, onChange] = useState(new Date());

  const dataobject = [{ ind: 1 }, { ind: 1 }, { ind: 1 }, { ind: 1 }];
  const dataobject2 = [
    { ind: 1 },
    { ind: 1 },
    { ind: 1 },
    { ind: 1 },
    { ind: 1 },
    { ind: 1 },
    { ind: 1 },
    { ind: 1 },
    { ind: 1 },
    { ind: 1 },
  ];
  return (
    <div className="flex-col w-full">
      {/* Page Header */}
      <Header title={"Dashboard"} />

      <div className="flex m-10">
        <div className="w-full mr-5">
          {/* calender */}
          <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white mb-5 ">
            Calendar
          </h4>
          <div className="">
            <Calendar calendarType="Arabic" onChange={onChange} value={value} />
          </div>
          {/* Cards Upcoming schedule */}
          <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white mt-12 ">
            Upcoming Schedule
          </h4>
          <div className="grid grid-cols-2 gap-4 lg:mt-[78px] 2xl:mt-[22px]">
            {dataobject.map((val, ind) => (
              <div
                key={ind}
                class="flex py-6 pr-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className=" border-4 rounded-r-full  border-green-500 mr-5 my-4"></div>
                <div>
                  <h5 class="mb-2 text-2xl font-bold text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 2H16V1C16 0.4 15.6 0 15 0C14.4 0 14 0.4 14 1V2H6V1C6 0.4 5.6 0 5 0C4.4 0 4 0.4 4 1V2H3C1.3 2 0 3.3 0 5V6H20V5C20 3.3 18.7 2 17 2ZM0 17C0 18.7 1.3 20 3 20H17C18.7 20 20 18.7 20 17V8H0V17ZM15 10C15.6 10 16 10.4 16 11C16 11.6 15.6 12 15 12C14.4 12 14 11.6 14 11C14 10.4 14.4 10 15 10ZM15 14C15.6 14 16 14.4 16 15C16 15.6 15.6 16 15 16C14.4 16 14 15.6 14 15C14 14.4 14.4 14 15 14ZM10 10C10.6 10 11 10.4 11 11C11 11.6 10.6 12 10 12C9.4 12 9 11.6 9 11C9 10.4 9.4 10 10 10ZM10 14C10.6 14 11 14.4 11 15C11 15.6 10.6 16 10 16C9.4 16 9 15.6 9 15C9 14.4 9.4 14 10 14ZM5 10C5.6 10 6 10.4 6 11C6 11.6 5.6 12 5 12C4.4 12 4 11.6 4 11C4 10.4 4.4 10 5 10ZM5 14C5.6 14 6 14.4 6 15C6 15.6 5.6 16 5 16C4.4 16 4 15.6 4 15C4 14.4 4.4 14 5 14Z"
                        fill="#1DB954"
                      />
                    </svg>
                    <p class="font-normal text-md text-gray-700 dark:text-gray-400">
                      Sep 29, 2022
                    </p>
                    <svg
                      className="ml-auto"
                      width="19"
                      height="5"
                      viewBox="0 0 19 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.201 5.68597e-08C8.91196 5.07687e-08 8.62575 0.0569305 8.35871 0.167541C8.09168 0.278152 7.84904 0.440276 7.64466 0.644658C7.44028 0.84904 7.27815 1.09168 7.16754 1.35871C7.05693 1.62575 7 1.91196 7 2.201C7 2.49004 7.05693 2.77625 7.16754 3.04329C7.27815 3.31032 7.44028 3.55296 7.64466 3.75734C7.84904 3.96172 8.09168 4.12385 8.35871 4.23446C8.62575 4.34507 8.91196 4.402 9.201 4.402C9.78474 4.40187 10.3445 4.16985 10.7572 3.75699C11.1699 3.34413 11.4016 2.78424 11.4015 2.2005C11.4014 1.61676 11.1693 1.05698 10.7565 0.644304C10.3436 0.231631 9.78374 -0.000132534 9.2 5.68597e-08H9.201ZM2.201 5.68597e-08C1.91196 5.07687e-08 1.62575 0.0569305 1.35871 0.167541C1.09168 0.278152 0.84904 0.440276 0.644658 0.644658C0.440276 0.84904 0.278152 1.09168 0.167541 1.35871C0.0569305 1.62575 0 1.91196 0 2.201C0 2.49004 0.0569305 2.77625 0.167541 3.04329C0.278152 3.31032 0.440276 3.55296 0.644658 3.75734C0.84904 3.96172 1.09168 4.12385 1.35871 4.23446C1.62575 4.34507 1.91196 4.402 2.201 4.402C2.78474 4.40187 3.34452 4.16985 3.7572 3.75699C4.16987 3.34413 4.40163 2.78424 4.4015 2.2005C4.40137 1.61676 4.16935 1.05698 3.75649 0.644304C3.34363 0.231631 2.78474 -0.000132534 2.201 5.68597e-08ZM16.201 5.68597e-08C15.912 5.07687e-08 15.6258 0.0569305 15.3587 0.167541C15.0917 0.278152 14.849 0.440276 14.6447 0.644658C14.4403 0.84904 14.2782 1.09168 14.1675 1.35871C14.0569 1.62575 14 1.91196 14 2.201C14 2.49004 14.0569 2.77625 14.1675 3.04329C14.2782 3.31032 14.4403 3.55296 14.6447 3.75734C14.849 3.96172 15.0917 4.12385 15.3587 4.23446C15.6258 4.34507 15.912 4.402 16.201 4.402C16.7847 4.40187 17.3445 4.16985 17.7572 3.75699C18.1699 3.34413 18.4016 2.78424 18.4015 2.2005C18.4014 1.61676 18.1693 1.05698 17.7565 0.644304C17.3436 0.231631 16.7847 -0.000132534 16.201 5.68597e-08Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          {/* Cards Top Prospects */}
          <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white mb-5">
            Top Prospects
          </h4>
          <div className="grid grid-cols-2 gap-5  ">
            {dataobject2.map((val, ind) => (
              <div
                key={ind}
                class="flex p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="w-full">
                  <div className="flex ">
                    <img
                      class=" w-12 h-12 rounded-full "
                      src={pfp}
                      alt="Bonnie image"
                    />
                    <div className="ml-2">
                      <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Whiteman
                      </h5>
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                        whiteman@gmail.com
                      </p>
                    </div>
                    <svg
                      className="ml-auto"
                      width="6"
                      height="25"
                      viewBox="0 0 6 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12.5003C6 12.1077 5.9224 11.7188 5.77164 11.356C5.62087 10.9932 5.3999 10.6636 5.12132 10.3859C4.84274 10.1082 4.51203 9.88799 4.14805 9.73771C3.78407 9.58744 3.39397 9.51009 3 9.51009C2.60603 9.51009 2.21593 9.58744 1.85195 9.73771C1.48797 9.88799 1.15726 10.1082 0.87868 10.3859C0.600105 10.6636 0.379125 10.9932 0.228361 11.356C0.0775971 11.7188 4.24432e-07 12.1077 4.07267e-07 12.5003C0.000181094 13.2934 0.316424 14.0539 0.879161 14.6146C1.4419 15.1752 2.20503 15.4901 3.00068 15.4899C3.79633 15.4897 4.55932 15.1745 5.1218 14.6136C5.68428 14.0527 6.00018 13.292 6 12.499L6 12.5003ZM6 2.99025C6 2.59756 5.9224 2.20872 5.77164 1.84593C5.62087 1.48313 5.3999 1.15349 5.12132 0.875823C4.84274 0.598153 4.51203 0.377893 4.14805 0.227619C3.78407 0.0773449 3.39397 -1.13913e-07 3 -1.31134e-07C2.60603 -1.48355e-07 2.21593 0.0773448 1.85195 0.227619C1.48797 0.377893 1.15726 0.598152 0.878681 0.875822C0.600105 1.15349 0.379126 1.48313 0.228362 1.84593C0.0775975 2.20872 8.40131e-07 2.59756 8.22967e-07 2.99025C0.00018151 3.78331 0.316425 4.54382 0.879162 5.10447C1.4419 5.66512 2.20503 5.97999 3.00068 5.97981C3.79633 5.97963 4.55932 5.66442 5.1218 5.10351C5.68428 4.5426 6.00018 3.78331 6 2.99025ZM6 22.0104C6 21.6178 5.9224 21.2289 5.77164 20.8661C5.62087 20.5033 5.3999 20.1737 5.12132 19.896C4.84274 19.6183 4.51203 19.3981 4.14805 19.2478C3.78407 19.0975 3.39396 19.0202 3 19.0202C2.60603 19.0202 2.21593 19.0975 1.85195 19.2478C1.48797 19.3981 1.15726 19.6183 0.87868 19.896C0.600104 20.1737 0.379125 20.5033 0.228361 20.8661C0.0775967 21.2289 8.73244e-09 21.6177 -8.43228e-09 22.0104C0.000180678 22.8035 0.316424 23.564 0.879161 24.1247C1.4419 24.6853 2.20503 25.0002 3.00068 25C3.79633 24.9998 4.55932 24.6846 5.1218 24.1237C5.68428 23.5628 6.00018 22.8035 6 22.0104Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-3 mt-4 items-center">
                    <div className="ml-2">
                      <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                        Age
                      </h5>
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                        12
                      </p>
                    </div>
                    <div>
                      <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                        Position
                      </h5>
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                        Midfielder
                      </p>
                    </div>
                    <div>
                      <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                        Avg Marks
                      </h5>
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                        4.7
                      </p>
                    </div>
                    <svg
                      className="ml-auto mr-2"
                      width="83"
                      height="26"
                      viewBox="0 0 83 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 25C1.31034 23.7848 6.58621 8.29114 12.7931 9.20253C19 10.1139 18.6897 15.8861 26.1379 18.0127C33.5862 20.1392 41.3448 18.9241 45.069 14.0633C48.7931 9.20253 53.7586 3.73418 58.7241 3.73418C63.6897 3.73418 79.2069 5.25316 82 1"
                        stroke="#1DB954"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
