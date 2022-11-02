import React from "react";
import Header from "../Components/Header";
import pfp from "../assets/pfp.png";
export default function PlayerareaSkill() {
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
  const date = new Date();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const day = date.getDate();

  return (
    <>
      <div className="flex-col w-full">
        {/* Page Header */}
        <Header title={"Players Area"} />
        {/* Title Of the Page */}
        <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white mx-10 my-5 ">
          Skills Evaluations
        </h4>
        {/* Search Button  */}
        <div className="flex items-center justify-start gap-10 mx-10 my-5">
          <form class="flex items-center w-1/2">
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required=""
              />
            </div>
            <button
              type="submit"
              class="inline-flex items-center py-3 px-5 ml-2 text-sm font-medium text-white bg-green-500 rounded-md "
            >
              Search
            </button>
          </form>
        </div>
        {/* Header Of Table  */}
        <div className="flex items-center  gap-10 mx-10 my-5">
          <label className="text-white font-medium ">
            {month} {day},{year}
          </label>
          <svg
            width="27"
            height="29"
            viewBox="0 0 27 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6 3.69922H3.7C2.20883 3.69922 1 4.90805 1 6.39922V25.2992C1 26.7904 2.20883 27.9992 3.7 27.9992H22.6C24.0912 27.9992 25.3 26.7904 25.3 25.2992V6.39922C25.3 4.90805 24.0912 3.69922 22.6 3.69922Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.55 1V6.4"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.75 1V6.4"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 11.8008H25.3"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <button
            type="button"
            class="text-black bg-white  font-medium rounded-md text-sm px-8 py-2.5 mr-2 "
          >
            Mark Done
          </button>
          <button
            class="text-white bg-green-500 ml-auto  focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Mental Skills
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <a
            href="/playerarea/addskill"
            class="text-white bg-green-500  focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Group
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </a>
        </div>
        {/* Table Of user  */}
        <div class="overflow-x-auto relative mx-10 my-5">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-700 uppercase  dark:text-gray-400 bg-white dark:bg-gray-800 border-b">
              <tr className="text-center">
                <th scope="col" class="py-3 px-6">
                  Player Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Confidence
                </th>
                <th scope="col" class="py-3 px-6">
                  Commitment
                </th>
                <th scope="col" class="py-3 px-6">
                  Control
                </th>
                <th scope="col" class="py-3 px-6">
                  Concentration
                </th>
                <th scope="col" class="py-3 px-6">
                  Communication
                </th>
                <th scope="col" class="py-3 px-6">
                  Comment
                </th>
              </tr>
            </thead>
            <tbody>
              {staticdata.map((val, ind) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex gap-5 items-center">
                      <img
                        class=" w-12 h-12 rounded-full"
                        src={pfp}
                        alt="Bonnie image"
                      />
                      Shaheer
                    </div>
                  </th>
                  <td class="py-4 px-6">
                    <select className="bg-[#0C0E14] p-0.5 text-white">
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                  </td>
                  <td class="py-4 px-6">
                    <select className="bg-[#0C0E14] p-0.5 text-white">
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                  </td>
                  <td class="py-4 px-6">
                    <select className="bg-[#0C0E14] p-0.5 text-white">
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                  </td>
                  <td class="py-4 px-6">
                    <select className="bg-[#0C0E14] p-0.5 text-white">
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                  </td>
                  <td class="py-4 px-6">
                    <select className="bg-[#0C0E14] p-0.5 text-white">
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                  </td>
                  <td>
                    <textarea
                      cols="40"
                      class="block p-2.5 w-full text-sm text-white bg-[#0C0E14] rounded-md placeholder:text-gray-400 "
                      placeholder="Add comment"
                    ></textarea>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* pagination */}
        <div className="flex items-center justify-end pt-5">
          <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white mx-10 my-5 ">
            Page
          </h4>
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3725 0.3675C9.8825 -0.1225 9.0925 -0.1225 8.6025 0.3675L0.2925 8.6775C-0.0975 9.0675 -0.0975 9.6975 0.2925 10.0875L8.6025 18.3975C9.0925 18.8875 9.8825 18.8875 10.3725 18.3975C10.8625 17.9075 10.8625 17.1175 10.3725 16.6275L3.1325 9.3775L10.3825 2.1275C10.8625 1.6475 10.8625 0.8475 10.3725 0.3675Z"
              fill="#7E7E7E"
            />
          </svg>
          <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white mx-10 my-5 ">
            1
          </h4>
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.369687 0.3675C0.859687 -0.1225 1.64969 -0.1225 2.13969 0.3675L10.4497 8.6775C10.8397 9.0675 10.8397 9.6975 10.4497 10.0875L2.13969 18.3975C1.64969 18.8875 0.859687 18.8875 0.369687 18.3975C-0.120313 17.9075 -0.120313 17.1175 0.369687 16.6275L7.60969 9.3775L0.359689 2.1275C-0.120311 1.6475 -0.120313 0.8475 0.369687 0.3675Z"
              fill="white"
            />
          </svg>
          <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white mx-10 my-5 ">
            out of 22
          </h4>
        </div>
      </div>
    </>
  );
}
