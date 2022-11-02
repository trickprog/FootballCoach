import React from "react";
import videoicon from "../assets/videoicon.png";
import DrillCard from "../Components/DrillCard";
import Header from "../Components/Header";
export default function UploadingDrill() {
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

  // onciick button uppload video

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
        <Header title={"Training Drills"} Preview={true} />

        <div className="flex  divide-x  ">
          {/* Upload Of user  */}
          <div>
            <h4 class="self-center text-xl font-semibold whitespace-nowrap  dark:text-white  mx-10 my-5 ">
              Attendance
            </h4>
            <div className=" flex mx-10">
              <div>
                <input
                  type="text"
                  class="bg-[#212121]  text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 mb-5"
                  placeholder="Search Mockups, Logos, Design Templates..."
                  required=""
                />

                <textarea
                  rows="10"
                  cols="70"
                  class="block p-2.5 w-full text-sm text-white bg-[#0C0E14] rounded-md placeholder:text-gray-400 "
                  placeholder="Add comment"
                ></textarea>
              </div>

              <div class="max-w-sm max-h-[350px] ml-5 bg-[#212121] rounded-lg flex flex-col items-center justify-center">
                <div>
                  <img class="rounded-t-lg" src={videoicon} alt="" />
                </div>

                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <div class="p-5 text-center">
                  <button
                    onClick={handleClick}
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Upload Video
                  </button>

                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Mp4,webm formats are supported
                  </p>
                </div>
              </div>
            </div>

            <select
              id="countries"
              class="bg-[#212121]  text-gray-400  text-sm rounded-lg block  p-2.5 mx-10 my-5"
            >
              <option selected=""> Select Category</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div>
              <button class="inline-flex items-center py-2 px-6 ml-10 text-sm font-medium text-black bg-white rounded-md ">
                Cancel
              </button>
              <button class="inline-flex items-center py-2 px-6 ml-5 text-sm font-medium  text-black bg-green-500 rounded-md ">
                Upload
              </button>
            </div>
          </div>

          {/*skill cards */}
          <div className="">
            <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white  my-5  ml-10 ">
              Uploading Drill
            </h4>

            <div className="mx-10 2xl:grid 2xl:grid-cols-2 2xl:gap-x-20">
              {staticdata.map((val, ind) => {
                return <DrillCard />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
