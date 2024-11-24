"use client";

import React from "react";
import Donation_card from "~/app/_components/donation_card";
import { donations } from "~/app/constants/constants";

import ReactPlayer from "react-player/youtube";

const Home = () => {
  return (
    <div className="block h-screen bg-specialGreen pt-14">
      <section className="h-24 overflow-y-scroll">
        {donations.map((e, idx) => (
          <Donation_card name={e.name} blood={e.blood} key={idx} />
        ))}
      </section>
      <hr className="mt-2" />

      <section className="mt-8 flex w-screen items-center justify-center">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=m_BlL3vHiXc"
          width={"90%"}
          height={"15rem"}
        />
      </section>
    </div>
  );
};

export default Home;
