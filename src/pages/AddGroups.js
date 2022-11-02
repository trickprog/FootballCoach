import React from "react";
import Header from "../Components/Header";
import pfp from "../assets/pfp.png";
export default function AddGroups() {
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

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };
  return (
    <>
      <div className="flex-col w-full">
        {/* Page Header */}
        <Header title={"Groups"} />
        {/* Title Of the Page */}

        <div className="flex divide-x">
          <div className="w-10/12 ml-10">
            <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white my-5 mx-10 ">
              Create Group
            </h4>
            <div className="flex gap-5 items-center">
              <input
                type="text"
                class="bg-[#212121]  text-gray-500 text-sm rounded-md w-1/2 pl-10 p-2.5  placeholder-gray-400"
                placeholder="Group name"
                required=""
              />
              <div
                onClick={handleClick}
                className="cursor-pointer flex items-center gap-5 p-2.5 text-gray-500 text-sm rounded-md  bg-[#212121]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.625 0H4.375C1.95967 0.00224297 0.00224297 1.95967 0 4.375V30.625C0.00224297 33.0403 1.95967 34.9978 4.375 35H30.625C33.0403 34.9978 34.9978 33.0403 35 30.625V4.375C34.9978 1.95967 33.0403 0.00224297 30.625 0ZM4.375 33.25C2.92589 33.2484 1.7516 32.0741 1.75 30.625V21.4819L8.33472 14.8972C9.53175 13.7043 11.4682 13.7043 12.6653 14.8972L30.9834 33.2136C30.8651 33.23 30.7477 33.2499 30.625 33.25H4.375ZM33.25 30.625C33.2493 31.2871 32.9955 31.8848 32.5908 32.3465L20.4875 20.2443L22.3347 18.3972C23.5318 17.2043 25.4682 17.2043 26.6653 18.3972L33.25 24.9819V30.625ZM33.25 22.5074L27.9026 17.16C26.0223 15.2836 22.9777 15.2836 21.0974 17.16L19.2503 19.0071L13.9026 13.6599C11.9986 11.8416 9.00143 11.8416 7.09741 13.6599L1.75 19.0073V4.375C1.7516 2.92589 2.92589 1.7516 4.375 1.75H30.625C32.0741 1.7516 33.2484 2.92589 33.25 4.375V22.5074Z"
                    fill="white"
                  />
                </svg>

                <div>Upload a file</div>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="mt-10 space-x-5">
              <button
                type="submit"
                class="inline-flex items-center py-3 px-6  text-sm font-medium text-black bg-white rounded-md "
              >
                Cancel
              </button>
              <button
                type="submit"
                class="inline-flex items-center py-3 px-6  text-sm font-medium text-white bg-green-500 rounded-md "
              >
                Create
              </button>
            </div>
          </div>
          
          <div className=" ">
            <div className="mr-10 ml-3 mt-16">
              <div className="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  class="bg-[#212121]  text-gray-500 text-sm rounded-md w-full pl-10 p-2.5  placeholder-gray-400"
                  placeholder="Search User"
                  required=""
                />
              </div>

              <div>
                {staticdata.map((val, ind) => {
                  const checkavaliblity = ind % 2 == 0;
                  return (
                    <div className="flex items-center  my-5">
                      <img
                        class=" w-10 h-10 rounded-full"
                        src={pfp}
                        alt="Bonnie image"
                      />
                      <h4 class="self-center text-lg font-semibold whitespace-nowrap dark:text-white ml-3  ">
                        John
                      </h4>
                      {checkavaliblity ? (
                        <svg
                        className="ml-auto"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.0275 0 0 4.0275 0 9C0 13.9725 4.0275 18 9 18C13.9725 18 18 13.9725 18 9C18 4.0275 13.9725 0 9 0ZM13.5 9.9H4.5V8.1H13.5V9.9Z"
                            fill="#1DB954"
                          />
                        </svg>
                      ) : (
                        <svg
                        className="ml-auto"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.02912 0 0 4.02912 0 9C0 13.9709 4.02912 18 9 18C13.9709 18 18 13.9709 18 9C18 4.02912 13.9709 0 9 0ZM13.68 9.72H9.72V13.68C9.72 13.871 9.64414 14.0541 9.50912 14.1891C9.37409 14.3241 9.19096 14.4 9 14.4C8.80904 14.4 8.62591 14.3241 8.49088 14.1891C8.35586 14.0541 8.28 13.871 8.28 13.68V9.72H4.32C4.12904 9.72 3.94591 9.64414 3.81088 9.50912C3.67586 9.37409 3.6 9.19096 3.6 9C3.6 8.80904 3.67586 8.62591 3.81088 8.49088C3.94591 8.35586 4.12904 8.28 4.32 8.28H8.28V4.32C8.28 4.12904 8.35586 3.94591 8.49088 3.81088C8.62591 3.67586 8.80904 3.6 9 3.6C9.19096 3.6 9.37409 3.67586 9.50912 3.81088C9.64414 3.94591 9.72 4.12904 9.72 4.32V8.28H13.68C13.871 8.28 14.0541 8.35586 14.1891 8.49088C14.3241 8.62591 14.4 8.80904 14.4 9C14.4 9.19096 14.3241 9.37409 14.1891 9.50912C14.0541 9.64414 13.871 9.72 13.68 9.72Z"
                            fill="#FF7878"
                          />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
