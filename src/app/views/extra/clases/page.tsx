"use client";

import React from "react";
import ReactPlayer from "react-player";
import { videos_nutrition, videos_yg } from "~/app/constants/constants";

const Clases = () => {
  return (
    <div className="h-screen overflow-x-scroll bg-specialGreen p-2 pt-14">
      <h1 className="text-2xl text-white">Yoga</h1>
      <section className="flex w-[50rem] gap-5">
        {videos_yg.map((e, idx) => (
          <ReactPlayer url={e.url} height={"15rem"} width="20rem" key={idx} />
        ))}
      </section>
      <h1 className="text-2xl text-white">Nutrition</h1>
      <section className="flex w-[50rem] gap-5">
        {videos_nutrition.map((e, idx) => (
          <ReactPlayer url={e.url} height={"15rem"} width="20rem" key={idx} />
        ))}
      </section>
    </div>
  );
};

export default Clases;
