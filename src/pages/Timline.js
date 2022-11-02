import React from "react";
import Header from "../Components/Header";
import PlayerProfileleftsidebar from "../Components/PlayerProfileleftsidebar";
import PlayerProfileCenterBox from "../Components/PlayerProfileCenterBox";
import PlayerProfileRightSidebar from "../Components/PlayerProfileRightSidebar";
import TimelinePost from "../Components/TimelinePost";
export default function Timline() {
  return (
    <>
      <div className="flex-col w-full ">
        {/* Page Header */}
        <Header title={"Player Profile"} />
        <div className="flex  divide-x h-screen">
          {/* left side-bar details  */}
          <div className="w-4/12 ml-10 mr-3">
            <PlayerProfileleftsidebar />
          </div>

          {/* center Post */}
          <div className=" w-full overflow-y-scroll">
            <TimelinePost />
          </div>

          {/* right side-bar parent profile */}

          <div className=" mr-10 w-4/12">
            <PlayerProfileRightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
