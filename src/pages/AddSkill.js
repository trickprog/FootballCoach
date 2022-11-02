import React from "react";
import Header from "../Components/Header";
import { skillsdata } from "../Components/Skills";
import AddSubSkill from "../Components/AddSubSkill";

export default function AddSkill() {
  return (
    <>
      <div className="flex-col w-full">
        {/* Page Header */}
        <Header title={"Dashboard"} />
        {/* Title Of the Page */}
        <div className="flex justify-between mx-10 my-5">
          <h4 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white   ">
            Skills Evaluations
          </h4>
          <a
            href="/playerarea/skill"
            class="text-white bg-green-500  focus:outline-none font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Go to evaluation
          </a>
        </div>

        {/* Cards oF CAtogerys  */}
        <div className="m-10 grid lg:grid-cols-4 2xl:grid-cols-5 lg:gap-5 2xl:gap-y-8">
          {skillsdata.map((val, ind) => {
            return (
              <AddSubSkill
                key={ind}
                subcat={val.cat}
                name={val.name}
                img={val.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
