import React from "react";
import Header from "../Components/Header";
import playerimg from "../assets/palyerimg.png";
export default function PlayerareaPlayers() {
  const playerdata = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },

  ];

  return (
    <div className="flex-col w-full ">
      {/* Page Header */}
      <Header title={"Players Area"} />
      {/* Title Of the Page */}
      <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white mx-10 my-5 ">
        Players
      </h4>

      {/* Search Button  */}
      <div className="flex items-center justify-start gap-10 mx-10 my-5">
        <form class="flex items-center w-full">
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
              class="w-1/2 bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg block  pl-10 p-2.5  dark:placeholder-gray-400 dark:text-white "
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

      {/* Player Card */}

      <div className="grid grid-cols-7 gap-y-5 m-10 ">
        {playerdata.map((val, ind) => {
          const change = ind % 2 == 0;
         
          return (
            <div class="max-w-[140px] bg-transparent">
              <img class={change?"rounded-t-lg bg-[#212121]":"rounded-t-lg bg-white"} src={playerimg} alt="" />

              <div class="p-5">
                <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Marcelo Diaz
                </h5>
                <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                  Defender
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* pagination */}

      <div className="flex items-center justify-end pt-10">
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
  );
}
