import React from "react";
import GroupList from "../Components/GroupList";
import Header from "../Components/Header";
import MoreProfiles from "../Components/MoreProfiles";
import RecentActivityies from "../Components/RecentActivityies";
import TimelinePost from "../Components/TimelinePost";
import UploadPostOntimeline from "../Components/UploadPostOntimeline";
export default function NewsFeed() {
  return (
    <>
      <div className="flex-col w-full ">
        {/* Page Header */}
        <Header title={"Player Profile"} />
        <div className="flex  divide-x h-screen">
          {/* left side-bar details  */}
          <div className="w-4/12 ml-10 mr-3">
            <RecentActivityies />
          </div>

          {/* center Post */}
          <div className=" w-full overflow-y-scroll">
            <UploadPostOntimeline />
            <TimelinePost />
          </div>

          {/* right side-bar parent profile */}

          <div className=" mr-10 w-4/12">
            <MoreProfiles />
            <GroupList />
          </div>
        </div>
      </div>
    </>
  );
}
