import React from "react";
import pfp from "../assets/pfp.png";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function PlayerProfileCenterBox() {


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

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: staticdata.map((val) => val.id),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      {/* picture card and Graph */}
      <div className="flex my-5 gap-5 mx-5 justify-between">
        <div class="w-full lg:max-w-[250px] 2xl:min-w-[350px] bg-transparent rounded-lg border border-gray-400 ">
          <div class="flex justify-center px-2 pt-4">
            <div class="flex flex-col items-center pb-10">
              <img
                class="mb-3 lg:w-20 lg:h-20  2xl:w-56 2xl:h-56 rounded-full shadow-lg"
                src={pfp}
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Huzayfah Hanif
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Huzayfah@gmail.com
              </span>

              <a
                href="/chat"
                class="inline-flex items-center py-2 px-4 mt-2 text-sm font-medium text-white bg-green-500 rounded-md "
              >
                Chat
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-[510px] 2xl:w-[800px] ">
          {/* tabs  */}
          <div class="flex justify-center text-sm font-medium text-center text-gray-500 ">
            <ul class="flex flex-wrap -mb-px">
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Profile
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <Line options={options} data={data} />
        </div>
      </div>
      {/* Pictures */}
      <div className="flex gap-5 my-5 mx-5">
        <img
          className="lg:w-[184.5px] lg:h-[190.5px] 2xl:w-[369px] 2xl:h-[307px]"
          src={pic1}
        />
        <img
          className="lg:w-[184.5px] lg:h-[190.5px]  2xl:w-[259px] 2xl:h-[307px]"
          src={pic2}
        />
        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
          <img
            className=" lg:w-[100.5px] lg:h-[90.5px]  2xl:w-[156px] 2xl:h-[147px]"
            src={pic2}
          />
          <img
            className="lg:w-[100.5px] lg:h-[90.5px]  2xl:w-[156px] 2xl:h-[147px]"
            src={pic2}
          />{" "}
          <img
            className="lg:w-[100.5px] lg:h-[90.5px]  2xl:w-[156px] 2xl:h-[147px]"
            src={pic2}
          />
          <img
            className=" lg:w-[100.5px] lg:h-[90.5px] 2xl:w-[156px] 2xl:h-[147px]"
            src={pic2}
          />
        </div>
      </div>
      {/* Desciption */}
      <div className="mx-5 my-5">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          About me
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          fermentum tristique mollis. Donec porta purus sed arcu feugiat
          sagittis. Sed tristique eget turpis a feugiat. amet, consectetur
          adipiscing elit. Suspendisse fermentum tristique
        </span>
      </div>
    </>
  );
}
